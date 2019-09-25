let itemRouter = require('express').Router();
var itemController = require('../controllers/cartItemController');

itemRouter.get('/items',function(){
    console.log("hello");
});
// itemRouter.post('/items',itemController.newItem);

// itemRouter.route('/items')
//             .get(itemController.index)
//             .post(itemController.newItem);

module.exports = itemRouter;