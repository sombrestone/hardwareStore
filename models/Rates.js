const Sequelize = require('sequelize');

module.exports= function(sequelize){
    return sequelize.define('rates',{
        serviceId:{type: Sequelize.INTEGER, primaryKey: true},
        actualDate:{type: Sequelize.DATEONLY, primaryKey: true,defaultValue: Sequelize.NOW},
        price:{type: Sequelize.DOUBLE, allowNull: false, min: 0.0}
    },{
        timestamps: false,
        indexes: [{
                unique: false,
                fields: [
                    {name: 'actualDate', order: "DESC"},
                    {name: 'serviceId', order: "ASC"},
                    {name: 'price', order: "ASC"}
                    ]
            }
        ]
    });
}