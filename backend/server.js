require("dotenv").config();
const express = require("express");
const cors = require("cors")
const routes = require("./routes/blogs")
const userRoutes = require("./routes/user")

PORT = process.env.PORT || 3005
const app = express();
const mongoose = require("mongoose");

app.use(cors())
app.use((req,res,next)=>{
    next()
})
app.use(express.json())
app.use("/api/blogs" , routes);
app.use("/api/user", userRoutes);
mongoose.connect(process.env.MONG_URI)
    .then(()=>{
        app.listen(PORT , () => { console.log("Database is connected & Server is running") });
    })
    .catch(e=>{console.log(e)});

