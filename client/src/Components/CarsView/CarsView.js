import './CarsView.css'
import {Link} from 'react-router-dom'
import {db,auth} from './../../utils/Firebase'
import { useEffect, useState } from 'react';
const CarView = ({
    nameAutor,
    name,
    description,
    imageURL,

})=>{
    const[user,setUser] = useState('')
    const [data, setData] = useState([])
    const getInfo = () => {
        db.collection("cars").doc(`${name}`).get()
            .then((doc) => {
                //console.log(doc.data());

                setData(doc.data());
                
            })
            .catch(err=>console.log(err));
    }

    useEffect(() => {
        getInfo();
        auth.onAuthStateChanged((user)=>{
            setUser(user.uid);
            
        })
    }, [])
   
 
return(
    
    <li className="carsImg">
        
        <h1>Name Autor: {nameAutor}</h1>
        <h2>Hello this is my Car:  {name}</h2>
        <span className="img"><img src={imageURL} /></span>
            <p className="description">description: {description}</p>
            {user === data.userId  ? <div>
        <Link to="edite/cars/:id"><button className="button-edit">Edit</button></Link>
                        
                    </div>  : '' }
    </li>
)
};
    export default CarView;