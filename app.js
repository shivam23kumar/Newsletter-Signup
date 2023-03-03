const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
 
const app = express();
app.use(bodyParser.urlencoded({ extended: true}));
 
const port = 3002;
 
// app.use(express.static('public'));
app.use(express.static(__dirname));
 
app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html")
})

app.post("/", function(req,res){
    var firstName = req.body.fName;
    var lastName = req.body.lName;
    var email = req.body.email;
})
 
app.listen(port, function() {
     console.log(`Example app listening at http://localhost:${port}`);
});