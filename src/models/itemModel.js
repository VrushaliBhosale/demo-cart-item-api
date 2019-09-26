var mongoose = require('mongoose');
var Domain=require('./typeModel');

// Item schema
var itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  sp:Number,
  cp:Number,
  create_date: {
    type: Date,
    default: Date.now
  },
  itemType: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'Domain'
  }
});

// Export Contact model
 module.exports = mongoose.model('Item', itemSchema);



