const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.listen(3002, function(){
    console.log("Server is running");
})