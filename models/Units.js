const Sequelize = require('sequelize');

module.exports= function(sequelize){
    return sequelize.define('units',{
        id:{type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
        name:{type: Sequelize.STRING(50), allowNull: false},
        shortName:{type: Sequelize.STRING(50), allowNull: false}
    },{
        timestamps: false,
        indexes: [{unique: false, fields: ['name']}]
    });
}