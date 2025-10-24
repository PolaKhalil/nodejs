const mongoose = require("mongoose");

const uri = "mongodb://mongo:guMZHlZPuxXpzqVLZqILCHndPvBsjOtv@mongodb.railway.internal:27017/mydb"; // غير اسم الداتا بيز لو تحب

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));
