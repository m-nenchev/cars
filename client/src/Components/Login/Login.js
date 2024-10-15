
import React,{useContext, useEffect} from 'react'
import { UserContext } from '../../Context/Context'
import { auth } from '../../utils/Firebase';
import './Login.css'
import { FaRegUser, FaLock } from "react-icons/fa";

const Login = ({history})=>{

    
 
    const [user,setUser] = useContext(UserContext);

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

       // console.log(username, password);

        auth.signInWithEmailAndPassword(username, password)
            .then(res => {
                const currUser = res.user;
                if(currUser){
                    history.push('/')
                   }
            
           })
           .catch(error => alert(error.message))
           
           
    };      
    useEffect(()=>{
        auth.onAuthStateChanged((user) => {
         setUser(user);
       
         //console.log(user);
         
        })
        
    },[])
    return (
        <section className="login">
            <div className='wrapper'>
            <div className='title'><span>Login Form</span></div>
            <form onSubmit={onLoginFormSubmitHandler}>     
                <label className='rowLabel' htmlFor="username">Username:</label>
                <div className="input">
                <FaRegUser className='icon'/>
                    <input type="text" className='rowText' name="username" id="username" placeholder="Username" required/>
            
                </div> 
                    
                <label className='rowLabel' htmlFor="password">Password:</label>
                <div className="input">
                    <FaLock className='icon'/>
                    <input type="password" className='rowText' name="password" id="password" placeholder="Password" required/>
                 
                </div>
                <div className='input'>
                    <input  type="submit" className="inputSubmit" value="Login" /> 
                </div>
            </form>
            </div>
        </section>
    );
};

export default Login;