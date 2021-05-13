const {Services,Rates,Units, sequelize} = require('../models');
const {Op}=require('sequelize');

//Класс управления услугами
class ServiceController{
    //добавление услуги
    async create(req,res,next){
        try {
            const {name,unitId} = req.body;
            const service = await Services.create({name, unitId});
            req.body.serviceId=service.id;
            next();
        }
        catch (e) {
            console.log(e);
            return res.status(400).json(`Server error`);
        }
    }
    //Новая цена для услуги
    async newRate(req,res){
        try {
            const {price,serviceId} = req.body;
            if (price!=undefined){
                const rate= await Rates.create({serviceId,price});
                return res.json({message: "Услуга создана"});
            }
            return res.json({message: "Цена не записана"});
        }
        catch (e) {
            return res.status(400).json(`Server error`);
        }
    }
//получить все услуги
    async getAll(req,res){
        try {
            const services = await Services.findAll({
                include:[{
                        model: Rates,
                        attributes:['price','actualDate'],
                        limit:1,
                        order:[['actualDate','DESC']]
                    }, {
                        model: Units,
                        attributes:['name','shortname']
                    }]
            });
            return res.json(services);
        }
        catch (e) {
            console.log(e)
            return res.status(400).json(`Server error`);
        }
    }
    //удалить услугу
    async delete(req,res){
        try{
            const{id}=req.body;
            const current=await Services.findOne({where:{id}});
            await current.destroy();
            return  res.json({message:"Услуга удалена"});
        }catch (e) {
            console.log(e);
            return res.status(400).json(`Server error`);
        }
    }
}

module.exports=new ServiceController();