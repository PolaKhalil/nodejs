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

    // ✅ التحقق من إدخال كل البيانات المطلوبة
    if (
      !fullName ||
      !phone ||
      !email ||
      !address ||
      !father ||
      !academicYear ||
      !username ||
      !password ||
      !birthday ||
      !role
    ) {
      return res.status(400).json({ message: "من فضلك املأ كل البيانات" });
    }

    // ✅ التحقق من القيم المكررة
    const existingPhone = await User.findOne({ phone });
    if (existingPhone)
      return res.status(400).json({ message: "رقم الموبايل مسجل بالفعل" });

    const existingEmail = await User.findOne({ email });
    if (existingEmail)
      return res.status(400).json({ message: "البريد الإلكتروني مسجل بالفعل" });

    const existingUsername = await User.findOne({ username });
    if (existingUsername)
      return res.status(400).json({ message: "اسم المستخدم موجود بالفعل" });

    // ✅ إنشاء المستخدم الجديد
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
      verified: 0,
      accepted_by: ""
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
