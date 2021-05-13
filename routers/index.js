const Router= require('express');
const router = new Router();

const userRouter= require('./userRouter');
const unitRouter = require('./unitRouter');
const serviceRouter= require('./serviceRouter');
const objectRouter= require('./objectRouter');
const orderRouter= require('./orderRouter');

router.use('/user',userRouter);
router.use('/unit',unitRouter);
router.use('/service',serviceRouter);
router.use('/object',objectRouter);
router.use('/order',orderRouter);

module.exports = router;