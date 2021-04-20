const jwt = require("jsonwebtoken");
const config=require("config");

module.exports = function(role){
    return function (req,res,next) {
        if (req.method === "OPTIONS") {
            next();
        }
        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({message: "Не авторизован"});
            }
            const decode = jwt.verify(token, config.get('tokenSeed'));
            if(role!== decode.role){
                return res.status(401).json({message: "Нет доступа"});
            }
            req.user = decode;
            next();
        } catch (e) {
            return res.status(401).json({message: "Не авторизован"});
        }
    }

}