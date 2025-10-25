const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;

    // التحقق من وجود البيانات
    if (!username || !password) {
      return res.status(400).json({ message: "من فضلك أدخل اسم المستخدم وكلمة المرور" });
    }

    // البحث عن المستخدم
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "بيانات الدخول غير صحيحة" });
    }

    // رجع بيانات المستخدم (بدون الباسورد)
    const userData = {
      id: user._id,
      fullName: user.fullName,
      username: user.username,
      role: user.role,
      phone: user.phone,
      email: user.email,
      address: user.address,
      father: user.father,
      academicYear: user.academicYear,
      birthday: user.birthday,
    };

    res.status(200).json({ message: "تم تسجيل الدخول بنجاح", user: userData });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "حدث خطأ أثناء تسجيل الدخول" });
  }
});

module.exports = router;
