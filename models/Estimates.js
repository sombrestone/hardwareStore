const Sequelize = require('sequelize');

module.exports= function(sequelize){
    return sequelize.define('estimates',{
        orderId:{type: Sequelize.INTEGER, primaryKey: true},
        serviceId:{type: Sequelize.INTEGER, primaryKey: true},
        scope:{type: Sequelize.DOUBLE, allowNull: false, min: 0.0}
    },{
        timestamps: false,
        indexes: [{unique: false, fields: ['orderId','serviceId','scope']}]
    });
}