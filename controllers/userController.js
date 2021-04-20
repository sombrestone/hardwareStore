const {Users}=require('../models');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const config=require("config");
const path=require("path");
const uuid=require("uuid");

const generateToken=(id,email,role)=>{
    return jwt.sign(
        {id,email,role},
        config.get('tokenSeed'),
        {expiresIn: '24h'});
}

class UserController{
    async registration(req,res){
        try {
            const {email, password} = req.body;
            const currentUser = await Users.findOne({where: {email}});
            if (currentUser) {
                return res.status(400)
                    .json({message: `User with email ${email} already exist`});
            }
            const hashPassword = await bcrypt.hash(password, 6);
            const user = await Users.create({email, password: hashPassword, role: false});
            const token=generateToken(user.id,user.email,user.role);
            return res.json({token});
        }
        catch (e) {
            console.log(e);
            return res.json('Server error');
        }
    }

    async login(req,res){
        try{
            const {email,password}=req.body;
            const currentUser= await Users.findOne({where: {email}});
            if (!currentUser){
                return res.status(400).json(`Пользователя с таким email не существует`);
            }
            let comparePassword=bcrypt.compareSync(password,currentUser.password);
            if (!comparePassword){
                return res.status(400).json(`Неверный пароль`);
            }
            const token=generateToken(currentUser.id,currentUser.email,currentUser.role);
            return res.json({token});
        }catch(e){
            console.log(e);
            return res.status(400).json(`Server error`);
        }
    }

    async auth(req,res){
        const token=generateToken(req.user.id,req.user.email,req.user.role);
        return res.json({token});
    }

    async updateData(req,res){
        try {
            const {newFirstname, newLastname, newPatronymic} = req.body;
            const {img} = req.files;
            const user = await Users.findOne({where: {id: req.user.id}});
            if (img !== undefined) {
                let filename = uuid.v4() + '.jpg';
                img.mv(path.resolve(__dirname, '..', 'static', filename));
                user.avatarURL=filename;
            }
            if (newFirstname !== undefined) user.firstname = newFirstname;
            if (newLastname !== undefined) user.lastname = newLastname;
            if (newPatronymic !== undefined) user.patronymic = newPatronymic;
            await user.save();
            return res.json({message: "Данные успешно обновлены"});
        }
        catch (e) {
            console.log(e);
            return res.status(400).json(`Server error`);
        }
    }
}

module.exports.userController = new UserController();

