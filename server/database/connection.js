const mongoose = require("mongoose");

const connectionDB = async() =>{
    try {
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGO_URI, {
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