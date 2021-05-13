const {Objects, sequelize} = require('../models');

class ObjectController{
    async create(req,res,next){
        try{
            const {address}=req.body;
            const obj=await Objects.create({address});
            req.body.objectId=obj.id;
            next();
            //return res.json({message: "Объект добавлен"});
        }
        catch (e){
            console.log(e);
            return res.status(400).json(`Server error`);
        }
    }
}

module.exports=new ObjectController();