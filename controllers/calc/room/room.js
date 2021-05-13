module.exports=class Room{
    _params;

    constructor() {
        this._params={
            width: 0,
            height: 0,
            length: 0
        }
    }

    setWidth(width){
        this._params.width=width;
    }

    setLength(length){
        this._params.length=length;
    }

    setHeight(height){
        this._params.height=height;
    }

    getWallsArea(){
        return this._params.width * this._params.height * 2 +
            this._params.height * this._params.length * 2;
    }

    getFloorArea(){
        return this._params.length * this._params.width;
    }
}