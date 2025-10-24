const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the index.html file for the root route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/new_account', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/new_account.html'));
});

module.exports = router;
