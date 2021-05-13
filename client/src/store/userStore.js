import {makeAutoObservable} from "mobx";

export default class UserStore{
    constructor() {
        this._isAuth=false;
        this._user={};
        this._name='';
        this._lastname='';
        this._patronymic='';
        makeAutoObservable(this);
    }

    setIsAuth(value){
        this._isAuth=value;
    }

    setUser(user){
        this._user=user;
        this._lastname=user.lastname;
        this._name=user.firstname;
        this._patronymic=user.patronymic;
        console.log(this._user);
    }

    setName(name){
        this._name=name;
    }

    setLastname(lastname){
        this._lastname=lastname;
    }

    setPatronymic(patronymic){
        this._patronymic=patronymic;
    }

    get isAuth(){
        return this._isAuth;
    }

    get user(){
        return this._user;
    }

    get name(){
        return this._name;
    }

    get lastname(){
        return this._lastname;
    }

    get patronymic(){
        return this._patronymic;
    }
}