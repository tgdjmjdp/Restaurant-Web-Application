const Mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await Mongoose.connect('mongodb://localhost:27017/restaurant', {
            useCreateIndex: true,
            useNewUrlParser: true, 
            useFindAndModify: false
        });
        console.log('DB Connected');
        
    } catch (error) {
        console.log('NOT Connected')
    }
}

module.exports = connectDB;
