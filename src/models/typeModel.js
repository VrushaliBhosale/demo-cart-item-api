var mongoose = require('mongoose');

var typeSchema = mongoose.Schema({
  category:{
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Domain',typeSchema);