import {auth} from './../../utils/Firebase'
import {useState} from 'react'
function Aoutorizion(){
const [email, setEmail] = useState('')
    auth.onAuthStateChanged((user)=>{
        console.log(user);
        if(!user){
        return ;
        }
        setEmail(user.email)
        
    })
   return email
}
export default Aoutorizion;