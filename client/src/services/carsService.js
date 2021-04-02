
const url = "https://cars-project-2edf1-default-rtdb.europe-west1.firebasedatabase.app/.json"


export const getAll  = ()=>{
   
    
    return fetch(url)
    .then(res => res.json())
    .catch(error => console.log(error));
    

}
export const create = (carName, description, imageURL) =>{
    let car = {
        name: carName,
        description,
        imageURL,
        
    };

 return fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(car)
});
}
