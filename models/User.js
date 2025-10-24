const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  birthday: { type: Date, required: true },
  father: { type: String, required: true },
  academicYear: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["1","2","3","خادم"], required: true },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
