const mongoose= require("mongoose")
const Schema = mongoose.Schema

const blogSchema = new Schema({
    author:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    //for authorization
    user_id:{
        type: String,
        required: true
    }
    //object tell when object is created
}, {timestamps:true})


module.exports = mongoose.model("blog", blogSchema);