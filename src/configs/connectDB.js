const mongoose = require('mongoose')
const dotenv = require("dotenv");

dotenv.config();


const connectDB = async () =>{
    mongoose.connect(process.env.MONGO_URI
    ).then(() => {
        console.log('Kết nối thành công đến MongoDB');
      }).catch((err) => {
        console.error('Lỗi khi kết nối đến MongoDB:', err);
      });
}
module.exports = connectDB;