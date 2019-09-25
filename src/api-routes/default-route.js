let router = require('express').Router();
var itemController = require('../controllers/cartItemController');
var Item = require('../models/itemModel');
 
router.get('/',function(req,res){
    console.log("req url is :",req.originalUrl);
    res.json({
        status:true,
        message:'Hello you are on the default path'
    });
  });

//   router.route('/items')
//             .get(function(req,res){
//                 console.log("inside get request to items route");
//                 res.json({
//                     status:200,
//                     message:"all items"
//                 })
//             })

router.route('/items')
      .get(itemController.index)
      .post(itemController.newItem)
        
module.exports = router;