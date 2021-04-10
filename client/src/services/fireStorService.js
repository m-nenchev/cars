import {db} from '../utils/Firebase';
import {useState} from 'react';
const url = "https://cars-project-2edf1-default-rtdb.europe-west1.firebasedatabase.app/.json"

export const dataFierstor = (name,imageURL,description) => {
let car = db.collection("cars").doc(`${name}`).set({
        name ,
        imageURL ,
        description ,
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