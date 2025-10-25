const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  birthday: { type: Date, required: true },
  father: { type: String, required: true },
  academicYear: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  level: { type: String, enum: ["1","2","3","خادم"], required: true },
  verified: { type: Number, required: true },
  accepted_by: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
