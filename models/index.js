const Sequelize=require('sequelize');
const config= require("config");

const DATABASE=config.get('database');

const sequelize= new Sequelize(
    DATABASE.name ,
    DATABASE.username ,
    DATABASE.password ,
    {
        dialect: DATABASE.dialect,
        host: DATABASE.host
});

const Users=require('./Users')(sequelize);
const Objects=require('./Objects')(sequelize);
const Orders=require('./Orders')(sequelize);
const Reviews=require('./Reviews')(sequelize);
const Photos=require('./Photos')(sequelize);
const Units=require('./Units')(sequelize);
const Services=require('./Services')(sequelize);
const Rates=require('./Rates')(sequelize);
const Estimates=require('./Estimates')(sequelize);

Users.hasMany(Orders);
Objects.hasMany(Orders);
Orders.belongsTo(Users);
Orders.belongsTo(Objects);

Orders.hasMany(Reviews);
Reviews.belongsTo(Orders);

Reviews.hasMany(Photos);
Photos.belongsTo(Reviews);

Units.hasMany(Services);
Services.belongsTo(Units);

Services.hasMany(Rates);
Rates.belongsTo(Services);

Orders.hasMany(Estimates);
Services.hasMany(Estimates);
Estimates.belongsTo(Orders);
Estimates.belongsTo(Services);

module.exports={
    sequelize,
    Users,
    Objects,
    Orders,
    Reviews,
    Photos,
    Units,
    Services,
    Rates,
    Estimates
};