const express = require('express');
const connectDB = require("./config/database");

//create new application for the express---instance of express js application
const app = express();
const User = require("./models/user");

//For reading the json file onto our server
//convert json object into javascript object
app.use(express.json());


app.post("/signup",async(req,res) =>{
    //Creating a new instance of user model
    const user = new User(req.body);
    
    try{
        await user.save();//The data will be saved in our database
        res.send("User added successfully!!");
    }catch(err){
        res.status(400).send("Error while saving the user:" + err.message);
    }

    
})


connectDB()
.then(() => {
    console.log("DB connection successfull....");
    app.listen(3000,()=> {
        console.log("Server is succesfully listening on port 3000....");
    });
})
.catch((err) => {
    console.error("DataBase cannot be connected...");
});

// app.listen(3000,()=>{
//     console.log("Server is succesfully listening on port 3000....");
// });




// app.use(
    "/user",
    (req,res,next) =>{
        console.log("Handling the route user !!");
        res.send("Response !!");
        next();
    },
    (req,res) =>{
        console.log("Handling the route user 2");
        res.send("2nd Responce");
    }
// );







//This is known as request handler fuction:-

// app.get("/", (req, res) => {
//     res.send("Yhi Home page hai bhai...");
// });

// app.get("/hey", (req, res) => {
//     res.send("Hey from the server!");
// });
// app.get("/user",(req,res) =>{
//     res.send({firstName:"Abhishek",lastName:"Yadav"});
// // });
// app.post("/user",(req,res)=>{
//     res.send("Data is successfully saved to the database");
// });
// app.delete("/user",(req,res)=>{
//     res.send("Deleted succesffully");
// });

// app.get("/test", (req, res) => {
//     res.send("Hello bro test dene aaya hia kya???");
// });
//Here app.use will match all the HTTTP method API calls to "/test"-->but app.get() will only match to get call of https
//we can also use  app.use("/test",(req,res)   =>{
    // res.send("Test dene aaya hai kya bhai?")})
//but here we must have to pass the home route to the end of the code -- order  of the routes matters here!
// i.e app.use("/",(res,req) =>{ res.send("Yhi Home route  hai ")});


//create server for listening so that any body can connect to it..

