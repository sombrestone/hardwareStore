const Router= require('express');
const router = new Router();

const serviceController=require('../controllers/serviceController');

const roleCheckMiddleware=require('../middleware/roleCheckMiddleware');

router.post('/new',roleCheckMiddleware(true),serviceController.create,serviceController.newRate);
router.get('/getAll',serviceController.getAll);
router.post('/newRate',roleCheckMiddleware(true),serviceController.newRate);
router.delete('/delete',roleCheckMiddleware(true),serviceController.delete);


module.exports = router;