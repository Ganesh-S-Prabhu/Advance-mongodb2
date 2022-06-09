const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/e-commerce"
    );
  } catch (error) {
    console.log(error);
  }
};
// vehicle_Database
module.exports = connectDB;
