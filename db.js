const mongoose = require("mongoose");

const uri = "mongodb+srv://khedma:j6j3mJyvOIajZOlB@khedma.j4ih4ss.mongodb.net/psq"; // غير اسم الداتا بيز لو تحب

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));
