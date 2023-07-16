const Blog = require("../models/Blog");
const mongoose = require("mongoose")


// GET ALL Blogs
const getBlogs = async(req,res)=>{
    const blogs = await Blog.find({}).sort({createdAt:-1})
    res.status(200).json(blogs);
}
//Get Blog by id
const getBlog = async(req,res)=>{
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error:"Blog does not exist"})
    }
    const blog = await Blog.findById(id);
    if(!blog)return res.status(404).json({error:"No such Blog"})
    res.status(200).json(blog);
}
//create a new Blog
const createBlog = async (req, res) => {
    const { author, title, content,user_id} = req.body;
    let empty = []
    if(!author)empty.push("name")
    if(!title)empty.push("info")
    if(!content)empty.push("email")

    if(empty.length>0){
        return res.status(400).json({error:"Please fill all the fields" , empty})
    }
    try {
        const blog = await Blog.create({ author, title, content,user_id})
        res.status(200).json(blog);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}
const deleteBlog = async(req,res)=>{
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Blog not found" })
    }
    const blog = await Blog.findOneAndDelete({_id:id})
    if (!blog) return res.status(404).json({ error: "No such Blog" })
    res.status(200).json(blog)
}


const updateBlog = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Blog not found" })
    }
    const blog= await Blog.findOneAndUpdate({_id:id},{
        ...req.body
    }) 
    if (!blog) return res.status(404).json({ error: "No such Blog" })
    res.status(200).json(blog)
}
module.exports = {getBlogs,getBlog,createBlog , deleteBlog , updateBlog}