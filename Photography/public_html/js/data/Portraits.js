import {Type}   from './Type.js';
import {Picture} from './Picture.js';
export class Portraits extends Picture {
    constructor(name, type,image) {
        //TODO: Hard coded values are code smells. Implement a new class containing type constants.
        super(name, Type.Portraits, image);
    }

   
}