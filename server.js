const express = require('express');
const connectDB = require('./config/database');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json({ extended: false }));

app.use('/api/auth', require('./routes/api/auth'));

app.use('/api/rest', require('./routes/api/rest'));

app.use('/api/food', require('./routes/api/food'));

app.listen(PORT, () => console.log("SERVER RUN AT " + PORT));