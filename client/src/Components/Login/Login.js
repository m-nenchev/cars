
import React,{useContext, useEffect} from 'react'
import { UserContext } from '../../Context/Context'
import { auth } from '../../utils/Firebase';
import './Login.css'
const Login = ({history})=>{

    
 
    const [user,setUser] = useContext(UserContext);

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        console.log(username, password);

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
            <form onSubmit={onLoginFormSubmitHandler}>
                
                    <legend>Login</legend>
                    <p className="field">
                        <label htmlFor="username">Username</label>
                        <span className="input">
                            <input type="text" name="username" id="username" placeholder="Username" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button" type="submit" className="submit" value="Login" />
               
            </form>
        </section>
    );
};

export default Login;