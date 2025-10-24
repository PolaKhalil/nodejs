const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST create user
router.post("/", async (req, res) => {
  try {
    const { fullName, phone, email, address, birthday, father, academicYear, username, password, role } = req.body;

    // تحقق من وجود المستخدم مسبقًا
    const existing = await User.findOne({ $or: [{ email }, { phone }, { username }] });
    if (existing) return res.status(400).json({ message: "المستخدم موجود مسبقًا" });

    const newUser = new User({
      fullName, phone, email, address, birthday, father, academicYear, username, password, role
    });

    await newUser.save();
    res.status(201).json({ message: "تم إنشاء المستخدم بنجاح" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "حدث خطأ داخلي" });
  }
});

module.exports = router;
