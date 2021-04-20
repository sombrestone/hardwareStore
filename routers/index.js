const Router= require('express');
const router = new Router();

const userRouter= require('./userRouter');
const unitRouter = require('./unitRouter');
const serviceRouter= require('./serviceRouter');

router.use('/user',userRouter);
router.use('/unit',unitRouter);
router.use('/service',serviceRouter);

module.exports = router;