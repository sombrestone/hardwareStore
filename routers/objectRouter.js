const Router= require('express');
const router = new Router();

const objectController=require('../controllers/objectController');

const authMiddleware=require('../middleware/authMiddleware');

router.post('/new',authMiddleware,objectController.create);

module.exports = router;