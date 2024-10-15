import * as fireStorService from '../../services/fireStorService';
import { Fragment, useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

import './Cars.css'
import {db,auth} from './../../utils/Firebase'


function Cars(){
    
    const[user,setUser] = useState('')
    
    const [email, setEmail] = useState('')
   
    auth.onAuthStateChanged((user)=>{
        //console.log(user);
        if(!user){
        return ;
        }
        setEmail(user.email)
        setUser(user.uid);
    })
    
    const[car, setCar]= useState([]);
    const dataInfo= [{id:'',info:''}];
    const fetchData = ()=>{
    db.collection("cars").get()
    .then((data) => {
        data.docs.map(doc =>  dataInfo.push({id:doc.id, info:doc.data()}));
        
       setCar(dataInfo)
    
    })
    .catch(err=>console.log(err));
    
}
    useEffect(() => {
        fetchData();
     
    }, [])

    console.log(user);
    return(
        
       <div className="cars">
          
          <Fragment>
              {email
               ?<span> <Link to="/create/cars"> <button className='buttonAddCar'>Add Car</button></Link></span>
               :  " "
              }
          </Fragment>
          <ul className="carsView">
        
              {
                  car.map( x=>{
                    if(x.id !=''){
                        return(
                            <li className="carsImg" key={x.id}>
        
                            <h1>Name Author: {x.info.nameAutor}</h1>
                            <h2>Hello this is my Car:  {x.info.name}</h2>
                            <span className="img"><img src={x.info.imageURL} alt="The photo is currently deleted" /></span>
                                <p className="description">description: {x.info.description}</p>
                                {user === x.info.userId  ? <div>
                            <Link to={`/edite/cars/${x.id}`}><button className="button-edit">Edit</button></Link>
                            <Link to={`/delete/cars/${x.id}`}><button className="button-edit">Delete</button></Link>  
                                        </div>  : '' }
                        </li>
                        )
                    }
                } )
              }
        
          </ul>
   
      </div>
       
    )
};
export default Cars;

