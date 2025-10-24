const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const {
      fullname, // لاحظ small n
      phone,
      email,
      address,
      father,
      grade,
      username,
      password,
      birth
    } = req.body;

    // التحقق من اسم المستخدم المكرر
    const existing = await User.findOne({ username });
    if (existing)
      return res.status(400).json({ message: "اسم المستخدم موجود بالفعل" });

    // إنشاء المستخدم الجديد
    const newUser = new User({
      fullName: fullname,
      phone,
      email,
      address,
      father,
      academicYear: grade,
      username,
      password,
      birthday: birth,
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
