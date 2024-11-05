const express = require("express");
const app = express();
const dbConnect = require("./mongodb");
const mongdb = require("mongodb");
app.use(express.json());

app.get("/", async (req, res) => {
  const db = await dbConnect();
  const data = await db.find({}).toArray();
  res.send(data);
});

app.post("/", async (req, res) => {
  const db = await dbConnect();
  const data = await db.insertMany(req.body);
  res.send(data);
});

app.put("/:name", async (req, res) => {
  const db = await dbConnect();
  const data = await db.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  res.send(data);
});

app.delete("/:id", async (req, res) => {
  const db = await dbConnect();
  const data = await db.deleteOne({ _id: new mongdb.ObjectId(req.params.id) });
  res.send(data);
});

app.listen(4000);
