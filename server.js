//Require dependencies

var express = require('express');
var app = express();
var path = require('path');


//Set our PORT

 var PORT = 3000;

 //Sets up the express app to handle data parsing for sending POST requests

//Parses the HTTP request body
//Allows Express to read the body and parse it to JSON
//urlencoded converts characters into a format that can be sent over internet 
//extended: false it will display date differently

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//bootstrap
app.use(express.static(path.join(__dirname, "public")));

//routes
//---------------------------
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "views/home.html"))
});

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "views/about.html"))
});

app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "views/contact.html"))
});


//BONUS 404 error//
app.get("*", function(req, res) {
res.sendFile(_dirname + "/views/404.html")
});


app.post('/thanks', function(req,res){
    console.log(req.body);res.send("Request received!");
});




//Starts our server to begin listening

app.listen(PORT, function(){
    console.log("App is listening on port: " + PORT);
})