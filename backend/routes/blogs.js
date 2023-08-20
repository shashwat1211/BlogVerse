const express = require("express")
const { getBlog , getBlogs , deleteBlog  ,createBlog ,updateBlog} = require("../controllers/blogControllers")


const router = express.Router()

 //router.use(requireAuth)


//Get all blogs
router.get("/" , getBlogs);

//Get a single blog
router.get("/:id", getBlog)

//Post a blog
router.post("/" ,createBlog )

//Delete a blog
router.delete("/:id", deleteBlog)

//update a blog
router.patch("/:id", updateBlog)

module.exports = router 