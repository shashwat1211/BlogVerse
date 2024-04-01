
import { formatDistance } from "date-fns"
import { Box } from "@mui/material"
import Loader from "../components/Loader"
import {Link} from "react-router-dom"
const BlogList = ({blogs}) => {
    return ( 
        <div className="blog-list">
           {!blogs && <Loader/>}
            {blogs?.map((blog) => (
                <div className="blog-details" key={blog._id} style= {{whiteSpace: 'nowrap' }}>
                    <Link to={`/blogs/${blog._id}`}  >
                    <div>
                        <h3>{blog.title}</h3>
                    <Box
                        component="div"
                        sx={{
                            textOverflow: "ellipsis",
                            overflow: 'hidden',
                            my: 2,
                            p: 1,
                            mt:0,
                            fontSize: '1.1rem',
                            fontWeight: '500',
                        }}
                    >
                        {blog.content}
                    </Box>
                        <p><em>Written by {blog.author}</em></p>
                        <p >{formatDistance(new Date(blog.createdAt), Date.now(), { addSuffix: true })}</p>
                        </div>
                    </Link>
                    </div>
            ))}
        </div>
     );
}
 
export default BlogList;