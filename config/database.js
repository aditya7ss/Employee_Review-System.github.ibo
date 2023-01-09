const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
  mongoose
    .connect('mongodb://0.0.0.0:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     
    })
    .then(console.log('DB CONNECTED SUCCESSFULLY'))
    .catch((err) => {
      // console.log('
      console.log(err);
      process.exit(1);
    });
};
