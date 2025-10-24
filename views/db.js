// db.js
const mongoose = require('mongoose');

const uri = "mongodb://mongo:guMZHlZPuxXpzqVLZqILCHndPvBsjOtv@mongodb.railway.internal:27017/";

mongoose.connect(uri, {
  dbName: "gnod", // غير الاسم حسب اسم الداتا بيز عندك
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
