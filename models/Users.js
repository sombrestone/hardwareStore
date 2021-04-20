const Sequelize = require('sequelize');

module.exports= function(sequelize){
    return sequelize.define('users',{
        id:{type: Sequelize.INTEGER, primaryKey: true, allowNull: false,
           autoIncrement:true},
        email:{type: Sequelize.STRING(25), allowNull: false,
            max:{args:[25]}, min:{args:[8],}},
        password:{type: Sequelize.STRING(255), allowNull: false,
            max:{args:[255]}, min:{args:[8],}},
        lastname:{type: Sequelize.STRING(50), allowNull: true},
        firstname:{type: Sequelize.STRING(50), allowNull: true},
        patronymic:{type: Sequelize.STRING(50), allowNull: true},
        role:{type: Sequelize.BOOLEAN, allowNull: false},
        avatarURL:{type: Sequelize.STRING(1000)}
    },{
        timestamps: false,
        indexes:[{unique: false, fields: ['lastname','firstname','patronymic']}]
    });
}