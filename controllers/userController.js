const {Users}=require('../models');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const config=require("config");
const path=require("path");
const uuid=require("uuid");

//функция генерации токена
const generateToken=(id,email,role,firstname,lastname,patronymic,avatarURL)=>{
    return jwt.sign(
        {id,email,role,firstname,lastname,patronymic,avatarURL},
        config.get('tokenSeed'),
        {expiresIn: '24h'});
}

//класс управления пользователями
class UserController{
    //метод регистрации
    async registration(req,res){
        try {
            const {email, password} = req.body;
            const currentUser = await Users.findOne({where: {email}});
            if (currentUser) {
                return res.status(400)
                    .json({message: `Пользователь с email ${email} уже существует!`});
            }
            const hashPassword = await bcrypt.hash(password, 6);
            const user = await Users.create({email, password: hashPassword,lastname:"",firstname:"",patronymic:"",avatarURL:"f01bade1-aeef-45f6-b856-8ee47e7f68a3.jpg",role: false});
            const token=generateToken(user.id,user.email,user.role,user.firstname,user.lastname,user.patronymic,user.avatarURL);
            return res.json({token});
        }
        catch (e) {
            console.log(e);
            return res.json({message:'Server error'});
        }
    }
//метод логина
    async login(req,res){
        try{
            const {email,password}=req.body;
            const currentUser= await Users.findOne({where: {email}});
            if (!currentUser){
                return res.status(400).json({message:`Пользователя с таким email не существует`});
            }
            let comparePassword=bcrypt.compareSync(password,currentUser.password);
            if (!comparePassword){
                return res.status(400).json({message:`Неверный пароль`});
            }
            const token=generateToken(currentUser.id,currentUser.email, currentUser.role,
                currentUser.firstname,currentUser.lastname,currentUser.patronymic,currentUser.avatarURL);
            return res.json({token});
        }catch(e){
            console.log(e);
            return res.status(400).json({message:`Server error`});
        }
    }
//метод аунтификации
    async auth(req,res){
        const token=generateToken(req.user.id,req.user.email,
            req.user.role,req.user.firstname,req.user.lastname,req.user.patronymic,req.user.avatarURL);
        return res.json({token});
    }
//метод обновления данных о пользователе
    async updateData(req,res,next){
        try {
            const {newFirstname, newLastname, newPatronymic} = req.body;
            let img;
            try{img = req.files.img}catch (e) {};
            const user = await Users.findOne({where: {id: req.user.id}});
            if ((img !== null)&&(img !== undefined)) {
                let filename = uuid.v4() + '.jpg';
                img.mv(path.resolve(__dirname, '..', 'static', filename));
                user.avatarURL=filename;
            }
            if (newFirstname !== undefined) user.firstname = newFirstname;
            if (newLastname !== undefined) user.lastname = newLastname;
            if (newPatronymic !== undefined) user.patronymic = newPatronymic;
            req.user=user;
            console.log(user);
            await user.save();
            next();
            //return res.json({message: "Данные успешно обновлены"});
        }
        catch (e) {
            console.log(e);
            return res.status(400).json({message:`Server error`});
        }
    }
}

module.exports.userController = new UserController();

