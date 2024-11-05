const express = require("express");
const app = express();
const EventEmitter = require("events");
const event = new EventEmitter();

let count=0
event.on('onClick',()=>{
    count++
    console.log(count, 'clicked');
    
})

app.get("/", (req, res) => {
  res.send(`Count Value ${count}`);
  event.emit('onClick')
});

app.listen(5000);
