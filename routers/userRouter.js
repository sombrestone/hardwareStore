const Router= require('express');
const router = new Router();

const {userController}=require('../controllers/userController');

const registrationMiddleware=require('../middleware/registrationMiddleware');
const authMiddleware=require('../middleware/authMiddleware');

router.post('/registration',registrationMiddleware,userController.registration);
router.post('/login',userController.login);
router.get('/auth',authMiddleware,userController.auth);
router.put('/updateData',authMiddleware,userController.updateData,userController.auth);

module.exports = router;