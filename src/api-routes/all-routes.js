let router = require('express').Router();
var itemController = require('../controllers/cartItemController');
 
router.get('/',function(req,res){
  console.log("req url is :",req.originalUrl);
  res.json({
      status:true,
      message:'Hello you are on the default path'
  });
});

router.route('/items')
  .get(itemController.getAllitems)
  // .post(itemController.newItem)
  .post(itemController.addWithItemType)

router.route('/items/:item_id')
  .get(itemController.viewItem)
  .put(itemController.updateItem)
  .delete(itemController.deleteItem)

router.route('/types')
  .get(itemController.getAllDomains)
  .post(itemController.addNewDomain)  
         
module.exports = router;