
import {Picture}        from '../data/Picture.js';
import {Portraits}       from '../data/Portraits.js';
import {Type}            from '../data/Type.js';



export class PhotographyService {

    constructor() {
        this._picture = new Picture();
    }

    create(pictureType, pictureName) {

        let picture = this.createPicture(pictureType, pictureName);
        this._pictures.add(picture);

    }

    getImage() {
        return this._pictures.getImage(pictureName);
    }
    
     handleRequestResponse() {
    //initialize globals
    init();
    //1. create an XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    //2. create a callback
    xhr.onreadystatechange = function () {

        if (xhr.readyState === 4 && xhr.status === 200) {
            process(xhr.responseXML);
            console.log(xhr.responseXML);
        }
    };
    //3. open request //use always relative path if you have resources it is easier to change db later
    xhr.open("GET", "data/photographyData.json" , true);//get, path, and boolean value
    //   set headers as needed
    xhr.setRequestHeader("content-type", "text/xml");
    //4. send request
    xhr.send();
}

    createPicture(pictureType, pictureName) {

        let data = pictureData[pictureType];
        let image = this.createImage(data['smallImage'], data['lagreImage'])

        let picture;

        switch (pictureType) {

            case Type.PORTRAITS:
                picture = new Portrait(pictureName, picutreType);
                break;
            case Type.SPORTS:
                picture = new Sports(pictureName, picutreType);
                break;
            case Type.LANDSCAPES:
                picture = new Landscapes(pictureName, picutreType);
                break;
            case Type.BLACK_WHITE:
                picture = new Black&white(pictureName,picutreType);
                break;


        }
        return picture;
    }
     createImage(smallImage, largeImage) {
        //TODO: Implement image creation & event handling.

        try {

            let image = new Image();
            image.src = smallImage;

            image.addEventListener('mouseover', function () {

                image.src = largeImage;

            });

            image.addEventListener('mouseout', function () {

                image.src = smallImage;

            });
            
            return image;

        } catch (error) {
            this._errors.push(new PictureError('Error while loading the image data: ' + error.message));
        }
        return null;
        
    }
}
