const Router= require('express');
const router = new Router();

const unitController=require('../controllers/unitController');

const roleCheckMiddleware=require('../middleware/roleCheckMiddleware');

router.post('/new',roleCheckMiddleware(true),unitController.create);
router.get('/getAll',unitController.getAll);
router.put('/updateData',roleCheckMiddleware(true),unitController.updateData);
router.delete('/delete',roleCheckMiddleware(true),unitController.delete);

module.exports = router;