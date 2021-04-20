const Sequelize = require('sequelize');

module.exports= function(sequelize){
    return sequelize.define('reviews',{
        id:{type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
        /*orderId:{type: Sequelize.INTEGER,allowNull: false},*/
        rating:{type: Sequelize.DOUBLE, min: 0.0, max: 10.0},
        comment:{type: Sequelize.STRING(3000),allowNull: true}
    },{
        timestamps: false,
        indexes:[
            {
            unique: false,
            fields: [
                    {name:'orderId', order: "DESC"},
                    {name:'rating', order: "DESC"}
                ]
            }
        ]
    });
}