const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB(); // connect to mongodb

app.use(express.static('public'));

// middleware
app.use(express.json());  // parse json body

//import user routes
const userRoutes = require('./routes/userRoutes');
const { connect } = require('mongoose');

//use user routes
app.use('/users', userRoutes);

//test route
app.get('/', (req,res) => {
    res.send("API is running");
});

//start server 
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});