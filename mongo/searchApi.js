const mongoose = require("mongoose");
const ProductModal = require("./config");
const express = require("express");
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/e-comm");

app.get("/list/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await ProductModal.find({
    "$or": [
      {
        name: {
          $regex: req.params.key,
        },
      }
    ],
  });
  res.send(data);
});

app.listen(4000);
