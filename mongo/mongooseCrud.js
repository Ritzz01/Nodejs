const mongoose = require("mongoose");
const ProductModal = require("./config");
const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/e-comm");

app.get("/list", async (req, res) => {
  let data = await ProductModal.find({});
  res.send(data);
});

app.post("/create", async (req, res) => {
  let data = new ProductModal(req.body);
  console.log(data);

  let result = data.save();
  res.send(result);
});

app.put('/:name',async(req,res)=>{
    let data=await ProductModal.updateMany({name:req.params.name},{$set:req.body})
    res.send(data)
})

app.delete('/:id',async(req,res)=>{
    let data=await ProductModal.deleteOne({_id:req.params.id})
    res.send(data)
})

app.listen(4000);
