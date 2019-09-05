const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

async () => {
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

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/api/auth'));

app.listen(PORT, () => console.log("SERVER RUN AT " + PORT));