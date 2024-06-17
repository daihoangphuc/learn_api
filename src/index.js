const express = require('express');
const connectDB = require('./configs/connectDB');
const cors = require('cors');
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const tacgiaRoute = require("../routes/tacgia");

app.use(cors());
app.use(morgan("common"))
app.use(express.json())
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


//Connect to DB
connectDB()

//routes
app.get('/', (req, res) =>{
    res.send('Toi dang send doan nay den server');
})

app.use('/v1/student', tacgiaRoute);

