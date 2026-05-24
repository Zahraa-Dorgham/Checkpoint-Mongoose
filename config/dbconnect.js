const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
      let result = await mongoose.connect(process.env.DB_URI);
    console.log("database is connected ");
  } catch (error) {
    console.error("database connection failed:", error.message);

  }
};

module.exports = connectDB;