const mongoose = require("mongoose");

const connectionDB = async() =>{
    try {
        // mongodb connection string
        const con = await mongoose.connect("mongodb+srv://admin:dmin123@cluster0.vwoh5.mongodb.net/users?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (e) {
    console.log(e);
    process.exit(1);
    }
};


module.exports = connectionDB;