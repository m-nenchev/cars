import {db} from '../utils/Firebase';

const url = "https://cars-project-2edf1-default-rtdb.europe-west1.firebasedatabase.app/.json"

export const dataFierstor = (nameAutor,name,imageURL,description,userId) => {
let car = db.collection("cars").doc(`${name}`).set({
    
    nameAutor,
        name ,
        imageURL ,
        description ,
        userId,
    })
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(car)
    });
  //  .then(() => {
  //      console.log("Document successfully written!");
  //  })
  //  .catch((error) => {
  //      console.error("Error writing document: ", error);
 //   });
}
export const getAll = () =>{


   return 
}