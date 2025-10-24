const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body); // 👈 عشان نتابع البيانات

    const {
      fullname,
      phone,
      email,
      address,
      father,
      grade,
      username,
      password,
      birth
    } = req.body;

    if (!fullname || !phone || !email || !address || !father || !grade || !username || !password || !birth) {
      return res.status(400).json({ message: "من فضلك املأ كل البيانات" });
    }

    // التحقق من المستخدم المكرر
    const existing = await User.findOne({ username });
    if (existing)
      return res.status(400).json({ message: "اسم المستخدم موجود بالفعل" });

    // إنشاء المستخدم
    const newUser = new User({
      fullName: fullname,
      phone,
      email,
      address,
      father,
      academicYear: grade,
      username,
      password,
      birthday: new Date(birth),
      role: grade,
      verified : 0
    });

    await newUser.save();
    res.status(201).json({ message: "تم إنشاء الحساب بنجاح!" });

  } catch (err) {
    console.error("User route error:", err);
    res.status(500).json({
      message: "حدث خطأ أثناء إنشاء الحساب",
      error: err.message
    });
  }
});

module.exports = router;
