const mongoose = require("mongoose");


const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://abhishek:cKJIlPkZLynWuzLW@devtinder.x10rn.mongodb.net/?retryWrites=true&w=majority&appName=DevTinder"
        );
};

module.exports = connectDB;
 

// connectDB()
// .then(() =>{
//     console.log("DB connection successfull....");
// })
// .catch((err) => {
//     console.error("DataBase cannot be connected...");
// })


