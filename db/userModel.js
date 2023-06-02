const mongoose = require("mongoose");

// to assign 

const userSchema = new mongoose.Schema({
email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email already exists"],
},

password: {
    type : String,
    required: [true, "Please provide a Password!"],
    unique: false,
},
});

module.exports = mongoose.model.Users || mongoose.model("Users",userSchema);