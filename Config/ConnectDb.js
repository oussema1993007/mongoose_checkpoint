const mongoose = require('mongoose');

const ConnectDb = async () => {
    try {
        await mongoose.connect('mongodb+srv://admin:oussema1993@cluster0.vl4d2.mongodb.net/contact2?retryWrites=true&w=majority&appName=Cluster0');
        console.log('You are connected to your database');
    } catch (error) {
        console.log(error);
    }
}
module.exports = ConnectDb;