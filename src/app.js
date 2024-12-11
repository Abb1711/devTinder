const express = require('express');

//create new application for the express---instance of express js application
const app = express();


//This is known as request handler fuction:-

app.get("/", (req, res) => {
    res.send("Yhi Home page hai bhai...");
});

app.get("/hey", (req, res) => {
    res.send("Hey from the server!");
});

app.get("/test", (req, res) => {
    res.send("Hello bro test dene aaya hia kya???");
});



//create server for listening so that any body can connect to it..
app.listen(3000,()=>{
    console.log("Server is succesfully listening on port 3000....");
});
