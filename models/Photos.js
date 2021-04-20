const Sequelize = require('sequelize');

module.exports= function(sequelize){
    return sequelize.define('photos',{
        id:{type: Sequelize.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
       /* reviewId:{type: Sequelize.INTEGER,allowNull: false},*/
        url:{type: Sequelize.STRING(1000), allowNull: false}
    },{
        timestamps: false,
        indexes: [{unique: false, fields: ['reviewId']}]
    });
}