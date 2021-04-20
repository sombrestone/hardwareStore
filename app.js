const express= require("express");
const config= require("config");
const db=require('./models');
const cors= require('cors');
const router=require('./routers');
const fileupload=require('express-fileupload');
const path=require('path');

const app= express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'static')));
app.use(fileupload());

app.use('/api', router);

const PORT=config.get('port') || 5000;

const start= async ()=>{
    try{
        await db.sequelize.authenticate();
        await db.sequelize.sync();
        app.listen(PORT,()=>{console.log(`Server started on port ${PORT}`)});
    }catch (e){
        console.log(e);
    }
}

start();

