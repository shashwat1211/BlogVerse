import { useEffect } from "react"
import { useBlogContext } from "../hooks/useBlogContext"
const FetchData = () => {
    const { blogs, dispatch } = useBlogContext()
    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await fetch("/api/blogs")
            const json = await response.json();
            if (response.ok) {
                dispatch({ type: "SET_BLOGS", payload: json })
            }
        }

        fetchBlogs();
    }, [dispatch]) 
   
    return blogs;
}

export default FetchData