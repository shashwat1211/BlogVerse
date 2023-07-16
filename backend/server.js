require("dotenv").config();
const express = require("express");

const routes = require("./routes/blogs")
 const userRoutes = require("./routes/user")

const app = express();
const mongoose = require("mongoose");


app.use((req,res,next)=>{
    console.log(req.path, req.method)
    next()
})
app.use(express.json())
app.use("/api/blogs" , routes);
 app.use("/api/user", userRoutes);
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        app.listen(process.env.PORT || 3000, () => { console.log("Database is connected & Server is running") });
    })
    .catch(e=>{console.log(e)});

