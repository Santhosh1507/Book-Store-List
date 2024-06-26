const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// /* Replace <password> with your database password */
// dotenv.config(); 

mongoose.set("strictQuery", true, "useNewUrlParser", true);

const connectDB = async () => {
  try {
    const db = process.env.MONGO_URI;
    await mongoose.connect(db);
    console.log("MongoDB is Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
module.exports = connectDB;