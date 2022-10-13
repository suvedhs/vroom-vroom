const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
)
.then(console.log("Database Connection Successful!"))
.catch(err => {
  console.log(err)
})

module.exports = mongoose.connection;