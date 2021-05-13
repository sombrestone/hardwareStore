const {Services} = require('../../models');
const Room = require('./room/room');

module.exports=class Calc{

    constructor() {
        this.room=new Room();
        this.services=[];
    }

    addService(id){
        this.services.push(id);
    }

    setRoomSize(size){
        this.room.setWidth(size.width);
        this.room.setLength(size.length);
        this.room.setHeight(size.length);
    }

     getServices(){
        let result=this.services.map(async el=>{
            let service=await Services.findOne({id:el});
            return service;
        });
        return result;
    }

    getEstimate(){
        let estimate= {
            services: [],
            price: 0
        }
        estimate.services=this.services.map(el=>{
            let price=el.price*this.room.getWallsArea();
            estimate.price+=price;
            return {id:el.id,price}
        });
        return estimate;
    }
}