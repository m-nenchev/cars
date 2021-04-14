import { Link } from 'react-router-dom';
import {auth} from '../../utils/Firebase'

import {useEffect,useState} from 'react'
import './Header.css'


function Header() {
const [email, setEmail] = useState('')

  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        //console.log(user);
        if(!user){
        return ;
        }
        setEmail(user.email)
        
    })
    

  },[])


    return (
        <header className="conteiner">
         <nav className="navbar">
            <section className="header">
               <ul className="navbar-1">
                  <li><Link className="listitem"  to="/" >Home</Link></li>
                  <li><Link className="listitem" to="/forum" >Forum</Link></li>
                  <li><Link className="listitem" to="/about/image" >Image</Link></li>
                  <li><Link className="listitem" to="/cars" >Cars</Link></li>
                  
                  <span className="userName">Name:{email}</span>
                     <div className="LoginDiv">
                       {email
                       ?  <span className="LoginButton">
                        <li className="span-li"><Link className="listitem" to="/logOut">LogOut</Link></li>
                       </span>
                       :<span>
                      <li className="span-li"><Link className="listitem" to="/login" >Login</Link></li>
                       <li className="span-li"><Link className="listitem" to="/register" >Register</Link></li>
                      
                       </span>
                      }
                       </div>
                </ul>
            </section> 

            <section className="navbar-anonymous">
                
            </section>
            </nav>
        </header>
    );
}
export default Header;