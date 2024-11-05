const express = require("express");
const app = express();
const multer=require('multer')

app.post('/',(req,res)=>{
    res.send("file upload")
})


app.listen(4000)