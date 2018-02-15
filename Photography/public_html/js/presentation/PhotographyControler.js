import {PhotographyService} from '../business/PhotographyService.js';


let photographyService  = new PhotographyService();

export class PhotographyControler{
    
    
     add(){
    document.innerHTML += "<br>" + "Add picture clicked";

        let animalType = prompt("Which picture you want to add (portraits/sports) ?");

        if (animalType.trim().length > 0) {
            let animalName = prompt("Enter picutre name: ");
            if (animalName.trim().length > 0) {

                PhotographyService.create(photographyType, photographyName);

                let photohgraphyList = document.getElementById("photographyList");

                let countChild = photohgraphyList.childElementCount;
                if (countChild <= 1) {
                    var orderedList = document.createElement("ol");
                    orderedList.setAttribute("id", "listID");
                    //animalList.appendChild(orderedList);
                    
                    document.appendChild(orderedList);
                   
                }
                let listElement = document.createElement("li");
                document.getElementById("listID").appendChild(listElement);
                
                let text = document.createTextNode(photohgraphyName);
                listElement.appendChild(text);
                
                listElement.appendChild(PhotohgraphyService.getImage(photohgraphyName));
            }
        }

        //TODO: Add the animal to the HTML animal list
    }

    
    
    
}
