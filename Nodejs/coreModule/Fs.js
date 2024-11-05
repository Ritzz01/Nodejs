const fs = require("fs");
// const path = require("path");

// const directory = path.join(__dirname, "files");

// for (let i = 1; i <= 5; i++) {
//   const folder = path.join(directory, `one${i}.txt`);

//   fs.writeFileSync(folder, "hello world");
// }

// -------------------------------Create----------------------------------

// //-----------sync---------
// fs.writeFileSync("one.txt", "hello world");

// //----------async----------

// fs.writeFile("two.txt", "hello ", (err) => {
//   console.log(err);
// });

// -------------------------------Read----------------------------------

// Sync

// let data = fs.readFileSync("one.txt", "utf-8");
// console.log(data);

// // Async

// fs.readFile("one.txt","utf-8",(err,data)=>{
//     if(err)
//     {
//         console.log(err);

//     }
//     else
//     {
//         console.log(data);

//     }
// })

// -------------------------------Delete----------------------------------

// // Sync

// fs.unlinkSync('one.txt')

//Async

// fs.unlink("One.txt",(err)=>{
//     if(err) console.log(err);
//     else console.log('deleted');

// })

// -------------------------------Update----------------------------------


//Sync
// fs.appendFileSync('one.txt'," hello")


//Async

// fs.appendFile('one.txt','hapy ',(err)=>{
//     if(err) console.log(error);
//       else console.log("FIle Updated"); 
// })


//overwrite data

// fs.writeFileSync('one.txt',"Helllooooo")


// -------------------------------Rename----------------------------------

// Sync


// fs.renameSync('one.txt',"rename.txt")


//Async

// fs.rename('rename.txt','one.txt',(err)=>{
//     if(err) console.log(err)
//     else console.log("renamed");
    
    
// })

// -------------------------------Copy----------------------------------

// Calling By value

//Sync
// fs.copyFileSync('one.txt','two.txt')

//Async
// fs.copyFile('one.txt','two.txt',(err)=>{
//     if(err) console.log(error);
//       else console.log("file renamed")
// })

// Calling By Reference
// Sync

// fs.linkSync('one.txt','two.txt')


//Async

// fs.link('one.txt','two.txt',(err)=>{
//     if(err) console.log(err);
//     else console.log("renamed");
    
    
// })


// -------------------------------Folders----------------------------------


// Create
// fs.mkdir('created',(err)=>{
//     if(err) console.log(error);
//      else console.log("Folder Created")
// })


//remove

// fs.rmdir('created',(err)=>{
//     if(err) console.log(error);
//      else console.log("Folder Created")
// })