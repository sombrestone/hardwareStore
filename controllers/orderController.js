const {Orders, sequelize} = require('../models');

class OrderController{
    async create(req,res){
        try {
            const {orderDate,beginDate,endDate,userId,objectId} = req.body;
            const orderStatus=0;
            const service = await Orders.create({orderDate,beginDate,endDate,orderStatus,userId,objectId});
            return res.json({message:'заказ добавлен'});
        }
        catch (e) {
            console.log(e);
            return res.status(400).json(`Server error`);
        }
    }
}

module.exports = new OrderController();