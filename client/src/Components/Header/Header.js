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
    <input type="checkbox" id="sidebar-active" />
    <label for="sidebar-active" className="open-sidebar-button">
    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"></path></svg>
    </label>
      <div className="navbar-1">
      <label for="sidebar-active" className="close-sidebar-button">
        <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>
      </label>
        <Link className="listitem"  to="/" >Home</Link>
        <Link className="listitem" to="/forum" >Forum</Link>
        <Link className="listitem" to="/about/image" >Image</Link>
        <Link className="listitem" to="/cars" >Cars</Link>
        {setUser
        ?<span className="userName">UserName: {email}</span>
        :<span className="userName"></span>
        }
        {setUser
        ?  <span className="LoginButton">
         <Link className="listitem" to="/logOut">LogOut</Link>
        </span>
        :
        <>
        <Link className="listitem listitemLogin" to="/login" >Login</Link>
        <Link className="listitem" to="/register" >Register</Link>
        </>
        }        
      </div>
    </nav>
  </header>
  );
}
export default Header;