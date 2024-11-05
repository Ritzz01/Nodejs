const path=require('path')

// let a="assest/picture/one.jpg"
// console.log(path.extname(a));
// console.log(path.dirname(a));
// console.log(path.basename(a));


console.log(path.join(__dirname));
//D:\nodejs\Nodejs\coreModule

console.log(path.join(__filename));
// D:\nodejs\Nodejs\coreModule\Path.js


console.log(path.join(__filename,'hello'));
// D:\nodejs\Nodejs\coreModule\Path.js\hello


console.log(path.join("you--->",__dirname));
// you--->\D:\nodejs\Nodejs\coreModule\Path.js