const {Units} = require('../models');

class UnitController{
    async create(req,res){
        try {
            const {name,shortName} = req.body;
            const unit = await Units.create({name,shortName});
            return res.json({message:" Юнит успешно добавлен"});
        }
        catch (e){
            console.log(e)
            return res.status(400).json(`Server error`);
        }
    }
    async getAll(req,res){
        try {
            const units = await Units.findAll();
            return res.json(units);
        }
        catch (e){
            console.log(e)
            return res.status(400).json(`Server error`);
        }
    }
    async updateData(req,res){
        try {
            const {id,name,shortName}=req.body;
            const currentUnit=await Units.findOne({where:{id}});
            if (currentUnit){
                currentUnit.name=name;
                currentUnit.shortName=shortName;
                await currentUnit.save();
                return res.json({message:`Единица измерения \"${name}\" успешно обновлена`});
            }
            return res.json({message:`Единица измерения с идентификатором ${id} не найдено`});
        }
        catch (e){
            console.log(e)
            return res.status(400).json(`Server error`);
        }
    }
    async delete(req,res){
        try {
            const {id}=req.body;
            const currentUnit=await Units.findOne({where:{id}});
            if (currentUnit){
                await currentUnit.destroy();
                return res.json({message:`Единица измерения \"${id}\" успешно удалена`});
            }
            return res.json({message:`Единица измерения с идентификатором ${id} не найдено`});
        }
        catch (e){
            console.log(e)
            return res.status(400).json(`Server error`);
        }
    }
}

module.exports= new UnitController();