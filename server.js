const express = require("express");
const dotenv = require('dotenv');
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const router = require("./server/routes/router")

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

// load router

app.use("/", router);


app.listen(PORT, () => {
    console.log("Server listening on port : " + PORT);
});


