import {createContext, useReducer} from "react";

export const BlogsContext = createContext()

export const blogsReducer = (state={blogs:[]},action)=>{
    switch(action.type){

        case 'SET_BLOGS':
            return {
                blogs:action.payload
            }
        case "CREATE_BLOG":
            return {
                blogs:[action.payload , ...state.blogs]
            }
        case "DELETE_BLOG":
            return{
                blogs :  state.blogs.filter((blog)=>blog?._id!== action.blog?._id)
            }
        case "GET_BLOG":
            return{
                blogs: state.blogs.filter((blog) => blog.user_id === action.blog.user_id)
            }
        case "SEARCH_BLOG":
            const {payload} = action
            
            return{
                blogs: state.blogs.filter((item) => item.author.toLowerCase().includes(payload.toLowerCase())
                    || item.title.toLowerCase().includes(payload)
                    || item.content.toLowerCase().includes(payload))
            }
        default: return state
    }    
}

export const BlogsContextProvider =({children})=>{
    const [state , dispatch] = useReducer(blogsReducer,{
        blogs:null
    })

    return(
        <BlogsContext.Provider value={{...state,dispatch}}>
            {children}
        </BlogsContext.Provider>
    )
}