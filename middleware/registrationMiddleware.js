const {validationResult,check} = require("express-validator");

module.exports = async function (req,res,next){
    await check('email','Incorrect email format').isEmail().run(req);
    await check('password','Incorrect password format').isLength({min:8,max:20}).run(req);
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}