import {Link} from 'react-router-dom';
import {db,auth} from '../../utils/Firebase';
import {useState,useEffect} from 'react'
import FormView from '../ForumView/ForumView'

function Contact(){

    const [email, setEmail] = useState('')
    auth.onAuthStateChanged((user)=>{
        console.log(user);
        if(!user){
        return ;
        }
        setEmail(user.email)
        
    })

    const[cars, setCar]= useState([]);
    const dataInfos= [{ids:'',infos:''}];
    const fetchDatas = ()=>{
    db.collection("forum").get()
    .then((data) => {
        data.docs.map(doc =>  dataInfos.push({ids:doc.id, infos:doc.data()}));
        console.log(dataInfos);
       setCar(dataInfos)
    
    })
}
useEffect(() => {
    fetchDatas();
   
}, [])

return(
    <div>
        <ul>
       {email

        ?<Link to="/create/forum"> <button>Add Forum Text</button></Link>
        : "Lelcom in the Forum"
}
</ul>
       <ul>
       {
                  cars.map( x=>
                    <FormView key={x.ids} {...x.infos}/>
                    )
              }
       </ul>


    </div>
      
)
}
export default Contact;