var mongoose = require('mongoose');

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
    // domain:{
    //     type:mongoose.Schema.ObjectId,
    //     ref:'Domain'
    // }
});

var typeSchema = mongoose.Schema({
    domain:{
        type: String,
        require: true
    }
})
// Export Contact model
 module.exports = mongoose.model('Item', itemSchema);
// var DomainModel = module.exports = mongoose.model('Domain',typeSchema);
// export  ItemModel;

// module.exports.get = function (callback, limit) {
//     ItemModel.find(callback).limit(limit);
//     DomainModel.find(callback).limit(limit);
// }

