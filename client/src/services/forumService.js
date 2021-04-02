
const urls = "https://cars-project-2edf1-default-rtdb.europe-west1.firebasedatabase.app/forum.json"

    
export const createForum =(name,description)=>{
    let forum = {
        name: name,
        description,
        
        
    };

 return fetch(urls, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(forum)
});
}
