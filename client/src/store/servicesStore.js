import {makeAutoObservable, observable} from "mobx";

export default class ServicesStore{

    constructor() {

        this._services=observable([]);
        this._units=[];
        this._selectedUnit={};
        makeAutoObservable(this);
    }

    setServices(services){
        this._services=services;
        console.log(this._services);
    }

    setSelectedUnit(unit){
        this._selectedUnit=unit;
    }

    setUnits(units){
        this._units=units;
    }

    get services(){
        return this._services;
    }

    get selectedUnit(){
        return this._selectedUnit;
    }

    get units(){
        return this._units;
    }



}

