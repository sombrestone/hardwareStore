const Sequelize = require('sequelize');

module.exports= function(sequelize){
    return sequelize.define('orders',{
        id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        orderStatus:{type: Sequelize.BOOLEAN, allowNull: false, default: false},
        /*userId:{type: Sequelize.INTEGER,allowNull: false},
        objectId:{type: Sequelize.INTEGER,allowNull: false},*/
        orderDate:{type: Sequelize.DATEONLY, allowNull: false},
        beginDate:{type: Sequelize.DATEONLY, allowNull: false},
        endDate:{type: Sequelize.DATEONLY, allowNull: false}
    },{
        timestamps: false,
        indexes:[{unique: true, fields: ['orderStatus','beginDate', 'endDate' ,
                'orderDate', 'userId', 'objectId'], name:'ordersUIndex'}]
    });
}