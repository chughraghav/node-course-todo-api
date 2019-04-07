var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MongoDB_URI,{useNewUrlParser: true});

module.exports = {
  mongoose
}
