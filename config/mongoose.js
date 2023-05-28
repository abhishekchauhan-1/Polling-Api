const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://singhchauhanabhishek816:Agcup8057@polling-api.urwezo6.mongodb.net/Polling_Api?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to Database: MongoDB');
});

module.exports = db;
