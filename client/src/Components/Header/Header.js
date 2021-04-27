import { Link } from 'react-router-dom';
import {auth} from '../../utils/Firebase'
import {UserContext} from '../../Context/Context'
import {useContext, useEffect,useState} from 'react'
import './Header.css'


function Header() {
const [email, setEmail] = useState('')
const[ setUser]=useContext(UserContext)
  useEffect(()=>{
  
   auth.onAuthStateChanged((user)=>{
   //console.log(user);
        if(!user){
        return ;
        }
      
        setEmail(user.email);
       
        
      
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
                  {setUser
                  ?<span className="userName">UserName: {email}</span>
                  :<span className="userName">UserName: </span>

                }
                     <div className="LoginDiv">
                       {setUser
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