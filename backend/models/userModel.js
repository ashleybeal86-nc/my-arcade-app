const mongoose = require('mongoose');

const userSchema = {
    title: String,
    context: String    
}

const User = mongoose.model("User", userSchema);

module.exports = User;
