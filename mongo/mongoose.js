const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// const mainDb = async () => {

//   const ProductModal = mongoose.model("product", ProductSchema);
//   const data = new ProductModal({ name: "Harry", age: 200 });
//   let result = await data.save();
//   console.log(result);
// };

const ProductModal = mongoose.model("product", ProductSchema);

const mainDb = async () => {
  let result = await ProductModal.insertMany([{ name: "Aloo", age: 18 }]);
  console.log(result);
};
//   mainDb()

const updateDb = async () => {
  let data = await ProductModal.updateOne(
    {
      name: "PotatoBoi",
    },
    { $set: { age: 10 } }
  );

  console.log(data);
};

const deleteDb = async () => {
  let data = await ProductModal.deleteOne({ name: "Harry" });
  console.log(data);
};

const findDb = async () => {
  let data = await ProductModal.find({}, { name: 1 });
  console.log(data);
};

findDb();
