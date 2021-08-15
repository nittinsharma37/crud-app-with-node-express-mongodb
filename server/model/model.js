const mongoose = require("mongoose");

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb;