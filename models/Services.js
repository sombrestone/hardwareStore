const Sequelize = require('sequelize');

module.exports= function(sequelize){
    return sequelize.define('services',{
        id:{type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
        name:{type: Sequelize.STRING(300), allowNull: false},
       /* unitId:{type: Sequelize.INTEGER,allowNull: false}*/
    },{
        timestamps: false,
        indexes: [{unique: false, fields: ['name','unitId']}]
    });
}