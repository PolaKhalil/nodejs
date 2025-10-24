// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // موديل المستخدمين

router.post('/', async (req, res, next) => {
  try {
    const { fullName, phone, email, address, father, academicYear, username, password, birthday } = req.body;

    // تحقق من اليوزر المكرر
    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: "اسم المستخدم موجود بالفعل" });

    const newUser = new User({ fullName, phone, email, address, father, academicYear, username, password, birthday });
    await newUser.save();

    res.status(201).json({ message: "تم إنشاء الحساب بنجاح!" });
  } catch (err) {
    next(err); // إرسال الخطأ للـ error handler العام
  }
});

// Error handler خاص بالـ router
router.use((err, req, res, next) => {
  console.error("User route error:", err);
  res.status(500).json({ message: "حدث خطأ داخلي أثناء معالجة الطلب" });
});

module.exports = router;
