const mongoose = require("mongoose");

// Make a schema with data properties
const UserSchema = new mongoose.Schema({
    email: String,
    password: String, 
    username: String,
    level: Number,
})

// Make a model that uses the schema
//                           name in DB, schema to use for validation
const UserModel = mongoose.model('User', UserSchema);

// Export the model
module.exports = {
    UserModel
}