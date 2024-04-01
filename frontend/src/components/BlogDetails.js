import { useNavigate, useParams } from "react-router-dom";
import FetchData from "./fetchData";
import { useAuthContext } from "../hooks/useAuthContext"
import { useBlogContext } from "../hooks/useBlogContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Blogdetails = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const {dispatch} = useBlogContext();
    const  blogs  = FetchData()
    const {id} = useParams();
    const data = blogs?.filter((blog)=>blog._id === id )
    const handleDelete= async()=>{
        if(!user)return
        const response = await fetch("https://blogging-6x9j.onrender.com/api/blogs/" + id , {
            method:"DELETE",
            headers:{
                Authorization:`Bearer ${user.token}`
            }
        })
        if(response.ok){
            const json = await response.json();
            dispatch({type:"DELETE_BLOG" , payload:json});
            toast.loading("Deleting Blog...")
            setTimeout(() => {
                navigate("/");
            }, 1200);
            
        }
        
    }
    return (
        <>
        <div className="blog-detail">
        
        {data?.map((blog)=>(
        <div key={blog._id}>
            <h3 style={{ textAlign: "center", fontFamily: "Poppins", fontWeight: "500", fontSize: "1.3em", color:"#525FE1",marginTop:"0px"}}>{blog.title}</h3>
            <p style={{fontSize:"18px"}}>{blog.content}</p>
            <div style={{display:"flex" , justifyContent:"space-between"}}>
                <p style={{marginTop:"16px"}}> <em>Written by </em>{blog.author}</p>
                {user && blog.user_id === user.email &&  <span className="material-symbols-outlined" style={{cursor:"pointer"}} onClick={handleDelete}>delete</span>}
            </div>
            <ToastContainer theme={"dark"} />
        </div>
        ))}
        
        </div>
        </>
    );
}

export default Blogdetails;