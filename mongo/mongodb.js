const { MongoClient } = require("mongodb");
const database = "e-comm";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db1 = result.db(database);

  return db1.collection("products");
  //   let response = await collection.find({name:'Ethan'}).toArray();
  //   console.log(response);
}

//using promise

// dbConnect().then((res) => {
//   res
//     .find({ name: "Charlie" })
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

//using async await

// //find data
// const main = async () => {
//   console.log("main called");
//   let data = await dbConnect();
//   data = await data.find({}).toArray();
//   console.log(data);
// };
// main();

// //insert data
// const insert = async () => {
//   let insertData = await dbConnect();
//   insertData = await insertData.insertMany([{ name: "Alu" }, { name: "ritu" }]);
//   // console.log(insertData);

//   if (insertData.acknowledged) {
//     console.log("Data inserted");
//   }
// };

// insert();

//update

// const update=async()=>{
//     let updateData=await dbConnect()
//     updateData= await updateData.updateMany({name:'Ritzz'},{$set:{age:22}})
//     console.log(updateData);

// }
// update()

//deleted

// const deleted = async () => {
//   let deleteData = await dbConnect();
//   deleteData = await deleteData.deleteMany({ name: "Ethan" });
//   console.log(deleteData);
// };
// deleted();


module.exports = dbConnect;
