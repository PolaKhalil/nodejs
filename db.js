const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://khedma:j6j3mJyvOIajZOlB@khedma.j4ih4ss.mongodb.net/psq?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
