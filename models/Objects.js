const Sequelize = require('sequelize');

module.exports= function(sequelize){
    return sequelize.define('objects',{
        id:{type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
        address:{type: Sequelize.STRING(300), allowNull: false}
    },{
        timestamps: false,
        indexes:[{unique: true, fields: ['address']}]
    });
}