import { useEffect } from "react"
import { useBlogContext } from "../hooks/useBlogContext"
const FetchData = () => {
    const { blogs, dispatch } = useBlogContext()
    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch("https://blogging-6x9j.onrender.com/api/blogs")
            const json = await response.json();
            console.log(json)
            if (response.ok) {
                dispatch({ type: "SET_BLOGS", payload: json })
            }
        }

        fetchBlogs();
    }, [dispatch]) 
   
    return blogs;
}

export default FetchData