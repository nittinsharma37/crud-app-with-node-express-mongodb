const express = require("express");
const dotenv = require('dotenv');
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

// dot env port 
dotenv.config({path: "config.env"});
const PORT = process.env.PORT || 8000;

// log request 
app.use(morgan("tiny"));


// parse request to body parser
app.use(bodyparser.urlencoded({extended: true}));

// set view engine 
app.set("view engine", "ejs");
// app.set("views", path.resolve(__dirname, "views"));

// load assets

app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));


app.get('/' , (req , res)=>{

   res.render("index");
   res.end();

});

app.get('/add-user' , (req , res)=>{

    res.render("adduser");
    res.end();
 
 });

 app.get('/update-user' , (req , res)=>{

    res.render("updateuser");
    res.end();
 
 });

app.listen(PORT, () => {
    console.log("Server listening on port : " + PORT);
});


