const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    console.log("BODY RECEIVED:", req.body);

    const {
      fullName,
      phone,
      email,
      address,
      father,
      academicYear,
      username,
      password,
      birthday,
      role
    } = req.body;

    if (!fullName || !phone || !email || !address || !father || !academicYear || !username || !password || !birthday || !role) {
      return res.status(400).json({ message: "من فضلك املأ كل البيانات" });
    }

    // التحقق من المستخدم المكرر
    const existing = await User.findOne({ username });
    if (existing)
      return res.status(400).json({ message: "اسم المستخدم موجود بالفعل" });

    // إنشاء المستخدم
    const newUser = new User({
      fullName,
      phone,
      email,
      address,
      father,
      academicYear,
      username,
      password,
      birthday: new Date(birthday),
      role,
      verified: 0
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
