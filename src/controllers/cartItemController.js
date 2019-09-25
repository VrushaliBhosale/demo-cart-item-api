// Import contact model
Item = require('../models/itemModel');

exports.hello = function(req,res) {
    res.json({ success: true });
    };

// Handle index actions
exports.index = function (req, res) {
    console.log("inside controller get request to items route");
    // res.status(200).json({ cool: 'asd' });
    Item
    .find()
    .then(res => {
        console.log(res);
        res.status(200).json({ success: true, data: res })
    })
    .catch(err => {
        console.log(err);
        res.status(200).json({ success: false, mssg: 'wrong' })
    });
};

// Handle create item actions
exports.newItem = function (req, res) {
    var item = new Item();
    item.title = req.body.title;
    item.sp = req.body.sp ? req.body.sp : item.sp;
    item.cp = req.body.cp ? req.body.cp : item.cp;
  
// save the item and check for errors
    item.save(function (err) {
        if (err)
            res.json(err);
    res.json({
            message: 'New item created!',
            data: item
        });
    });
};
