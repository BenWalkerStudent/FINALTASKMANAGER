const mongoose = require("mongoose");

// Connect to MongoDB


const connectDB = (url) => {
    return mongoose
        .connect(url)
        .then(() => {
            console.log("Connected to MongoDB");
        })
        
};

module.exports = connectDB; 