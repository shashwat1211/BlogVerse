import { useAuthContext } from "../hooks/useAuthContext"
import BlogList from "../components/BlogList"
import fetchData from "../components/fetchData"
import { Link } from "react-router-dom"
const MyBlogs = () => {
    const {user} = useAuthContext();
    const user_id = String(user?.email);
    const data = fetchData();
    const blogs = user_id ? data?.filter((blog) => blog.user_id === user_id) : data;
    return (
        <div className="myBlogs" style={{ minHeight: "450px" }}>
            {!user && 
            <div className="no-user" >
                    <h3>Oops!!</h3> You are not logged in.<br /><Link to="/login" style={{ color: "rgb(110, 78, 217)" }}>Log in</Link> to see your blogs.
            </div> }
            {user &&
            <div className="blogs">
            {blogs?.length === 0 && <div className="no-user">You haven't posted any Blog yet.</div>}
              {blogs?.length > 0 && <BlogList blogs= {blogs}/>}
            </div>
            }
        </div>
       
    );
}

export default MyBlogs;