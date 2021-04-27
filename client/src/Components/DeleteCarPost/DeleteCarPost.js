import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import {db} from '../../utils/Firebase'

export default function DeletePost({
    match
}) {
    
    const idPost = match.params.id;
    const history =useHistory();
    useEffect(()=>{
        db.collection("cars").doc(idPost).delete()
        .then(res =>{
             console.log(res);
            history.push('/cars');
        })
        .catch(err=>console.log(err));
    },[])

    

   

    return (
        <div>
            
        </div>
    )
}