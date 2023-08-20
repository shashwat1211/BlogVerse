import { useState } from "react";
import { useBlogContext } from "../hooks/useBlogContext";
import { useAuthContext } from "../hooks/useAuthContext"
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const Create = () => {
    const { dispatch } = useBlogContext()
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(null);
    const [empty, setEmpty] = useState([])
    const navigate = useNavigate();

    const { user } = useAuthContext()
    let userId = user?.email;
    const user_id =String(userId);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) {
            setError("Login required")
            return
        }
        const blog = { author, title, content,user_id};
        const response = await fetch("https://blogging-6x9j.onrender.com/api/blogs", {
            method: "POST",
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json",
                 Authorization: `Bearer ${user.token}`
            }
        })
        const json = await response.json();
        if (!response.ok) {
            setError(json.error)
            setEmpty(json.empty)
            toast.error("Blog Creation failed")
        }
        if (response.ok) {
            setError(null)
            setAuthor("")
            setTitle("")
            setContent("")
            setEmpty([])
            toast.success("Blog added");
            dispatch({ type: "CREATE_BLOG", payload: json })
            setTimeout(() => {
                navigate("/")
            }, 1200);
            
        }
    }
    return ( 
        <div className="myBlogs" >
        {!user && (
                <div className="no-user" style={{ minHeight: "444px" }}>
                <h3>Oops!!</h3> 
                    You are not logged in.<Link to="/login" style={{ color: "rgb(110, 78, 217)" }}>Log in</Link> to write a blog.<br />
                    Or <Link to="/signup" style={{ color: "rgb(110, 78, 217)" }}>Sign up</Link> to create a account.
                
            </div>
        )}
        {user && (
            
            <form className="create" onSubmit={handleSubmit}>
            <h2>Add a new Blog</h2>
            <div className="title">
                <label>Title : </label>
                <input type='text' value={title} onChange={(e) => { setTitle(e.target.value) }} className={empty?.includes("title") ? "error" : ""} />
            </div>
            <div className="content">
                <label>Blog </label>
                <textarea value={content} onChange={(e) => { setContent(e.target.value) }} className={empty?.includes("content") ? "error" : ""} 
                    placeholder="Share your ideas here!!"
                    rows={10}
                    cols={100}
                    style={{width:"40vw" , height:"10vw" , border:"1.5px  solid",padding:"5px" , fontSize:"1.1rem"}}
                />
            </div>
            <div className="author">
                <label>Author  : </label>
                <input type='text' value={author} onChange={(e) => { setAuthor(e.target.value) }} className={empty?.includes("author") ? "error" : ""} />
            </div>
            <div className="form-btn">
                <button className="btn" style={{fontSize:"1.1rem",marginTop:"10px"}} > Create Blog</button>
            </div>
            <ToastContainer theme="dark" />
            {error && <div className="error">{error}</div>}
        </form>)}
        <div style={{minHeight:"100px"}}>

        </div>
        </div>
    );
}

export default Create