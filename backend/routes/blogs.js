const express = require("express")
const { getBlog , getBlogs , deleteBlog  ,createBlog ,updateBlog} = require("../controllers/blogControllers")


const router = express.Router()

 //router.use(requireAuth)


//Get all contacts
router.get("/" , getBlogs);

//Get a single contact
router.get("/:id", getBlog)

//Post a contact
router.post("/" ,createBlog )

//DELETe a contact
router.delete("/:id", deleteBlog)

//update a contact
router.patch("/:id", updateBlog)

module.exports = router 