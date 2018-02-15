/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


 export class Picture {
    constructor(name, type, image) {
        this._name = name;
        this._type = type;
        this._image = image;
       
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get image() {
        return this._image;
    }

   
    }