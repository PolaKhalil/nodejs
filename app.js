const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

require('./db'); // الاتصال بالـ MongoDB

// Middleware لقراءة JSON من الـ body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// HTML Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// API Routes
const usersRouter = require('./routes/users'); // راوت المستخدمين
app.use('/api/users', usersRouter);

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
