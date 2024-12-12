const express = require('express');

//create new application for the express---instance of express js application
const app = express();


//This is known as request handler fuction:-

// app.get("/", (req, res) => {
//     res.send("Yhi Home page hai bhai...");
// });

// app.get("/hey", (req, res) => {
//     res.send("Hey from the server!");
// });
app.get("/user",(req,res) =>{
    res.send({firstName:"Abhishek",lastName:"Yadav"});
});
app.post("/user",(req,res)=>{
    res.send("Data is successfully saved to the database");
});
app.delete("/user",(req,res)=>{
    res.send("Deleted succesffully");
});

app.get("/test", (req, res) => {
    res.send("Hello bro test dene aaya hia kya???");
});
//Here app.use will match all the HTTTP method API calls to "/test"-->but app.get() will only match to get call of https
//we can also use  app.use("/test",(req,res)   =>{
    // res.send("Test dene aaya hai kya bhai?")})
//but here we must have to pass the home route to the end of the code -- order  of the routes matters here!
// i.e app.use("/",(res,req) =>{ res.send("Yhi Home route  hai ")});


//create server for listening so that any body can connect to it..
app.listen(3000,()=>{
    console.log("Server is succesfully listening on port 3000....");
});
