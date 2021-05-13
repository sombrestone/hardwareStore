const Router= require('express');
const router = new Router();

const orderController=require('../controllers/orderController');
const objectController=require('../controllers/objectController');

router.post('/new',objectController.create,orderController.create);

module.exports = router;