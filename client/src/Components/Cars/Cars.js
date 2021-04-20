import * as fireStorService from '../../services/fireStorService';
import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import CarsView from '../CarsView/CarsView'
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
        
    })
  
    const[car, setCar]= useState([]);
    const dataInfo= [{id:'',info:''}];
    const fetchData = ()=>{
    db.collection("cars").get()
    .then((data) => {
        data.docs.map(doc =>  dataInfo.push({id:doc.id, info:doc.data()}));
        console.log(dataInfo);
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
          
          <ul>
              {email
               ?<li> <Link to="/create/cars"> <button>Add Cars</button></Link></li>
               :  " "
              }
          </ul>
          <ul>
        
              {
                  car.map( x=>{
                    if(x.id !=''){
                        return(
                    <CarsView key={x.id} {...x.info} />
                        )
                    }
                } )
              }
        
          </ul>
   
      </div>
       
    )
};
export default Cars;

