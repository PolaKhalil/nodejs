const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public"
app.use(express.static(path.join(__dirname, 'public')));

// Router
app.use('/', indexRouter);

// New Account Page
app.get('/new-account', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'new_account.html'));
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
