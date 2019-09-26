Item = require('../models/itemModel');
ItemType = require('../models/typeModel');

exports.getAllitems = function (req, res) {
  Item
    .find()
    .then(data => {
      res.json({
        status:true,
        message:'Hello',
        data:data
      })
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false, msg: 'Items not loaded' })
    });
};

exports.newItem = function (req, res) {
  var item = new Item();
  item.title = req.body.title;
  item.sp = req.body.sp ? req.body.sp : item.sp;  
  item.cp = req.body.cp ? req.body.cp : item.cp;
  item.save()
    .then(()=>{
      res.json({
        message: 'New item created!',
        data: item
      });
    })
    .catch(err=>{
      console.log(err);
      res.json({ success: false, msg: 'Items not loaded' })
    });
};

exports.viewItem = function (req,res) {
  Item.findById(req.params.item_id)
    .then(item => {
      res.json({
        message: 'item details loading..',
        data: item
      });
    })
    .catch(err => {
      console.log(err);
      res.json({ success: false, msg: 'Item not loaded' })
    });
};

exports.updateItem = function (req, res) {
  Item.findById(req.params.item_id)
    .then(item => {
      item.title = req.body.title 
      item.sp = req.body.sp ? req.body.sp : item.sp;
      item.cp = req.body.cp ? req.body.cp : item.cp;
      item.save()
        .then(()=>{
          res.json({
            success:true,
            message: 'item Info updated',
            data: item  
          });
        })
        .catch(err=>{
          console.log(err);
          res.json({ success: false, msg: 'Item not updated' })
        })
    })
    .catch(err=>{
      console.log(err);
      res.json({ success: false, msg: 'Item not loaded' })
    });
 };

 exports.deleteItem = function(req,res) {
  Item.remove({ _id: req.params.item_id})
    .then((item)=>{
      res.json({
        status: "success",
        message: 'Contact deleted',
        item:item
      });
    })
    .catch(err=>{
      console.log(err);
      res.json({ success: false, msg: 'Item not deleted' })
    });
 }

 exports.getAllDomains = function (req, res) {
  ItemType
    .find()
    .then(data => {
      res.json({ 
        status:true,
        data:data
      })
    })
    .catch(err => {
      console.log(err);
      res.json({ status: false, msg: 'ItemsType not loaded' })
    });
};

exports.addNewDomain = function (req, res) {
  var itemtype = new ItemType();
  itemtype.domain = req.body.domain;
  itemtype.save()
    .then(()=>{
      res.json({
        status:true,
        message: 'New itemtype created!',
        data: itemtype
      });
    })
    .catch(err=>{
      console.log(err);
      res.json({ status: false, msg: 'ItemsType not added successfully' })
    });
};

  exports.addWithItemType = function (req,res){
    var item = new Item();
    var itemtype = new ItemType();

    itemtype.type=req.params.itemtype.type;
    itemtype.save()
      .then(()=>{
        res.json({
          message: 'itemtype Info saved',
          data: itemtype  
        });
      })
      .catch(err=>{
        console.log(err);
        res.json({ success: false, msg: 'domain not saved' });
      });

    item.title = req.params.title;
    item.sp = req.body.sp ? req.body.sp : item.sp;
    item.cp = req.body.cp ? req.body.cp : item.cp;
    item.itemType = req.body.itemType;
    console.log("item is :",item);
    item.save()
      .then(()=>{
        res.json({
          message: 'Item Info saved',
          data: item  
        });
      })
      .catch(err=>{
        console.log(err);
        res.json({ success: false, msg: 'Item not saved' });
      });
  }



