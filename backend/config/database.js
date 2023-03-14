const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/flipkart', { useNewUrlParser: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;