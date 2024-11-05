const details = (req, res, next) => {
    console.log("details");
    //next ni call kroge toh page load hote rhega
  
    let a = req.query.age;
    if (a < 18) {
      res.send("Underage")
    }
    else{
  
        next();
    }
  };
  
  module.exports=details