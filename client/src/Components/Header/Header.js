import { Link } from 'react-router-dom';

import './Header.css'


function Header() {
    return (
        <header className="conteiner">
         <nav className="navbar">
            <section className="header">
               <ul className="navbar-1">
                  <li><Link className="listitem"  to="/" >Home</Link></li>
                  <li><Link className="listitem" to="/forum" >Forum</Link></li>
                  <li><Link className="listitem" to="/about/image" >Image</Link></li>
                  <li><Link className="listitem" to="/cars" >Cars</Link></li>
                  
                     <div className="LoginDiv">
                         <span className="LoginButton">
                       <li className="span-li"><Link className="listitem" to="/login" >Login</Link></li>
                       </span>
                       <li className="span-li"><Link className="listitem" to="/register" >Register</Link></li>
                       <li className="span-li"><Link className="listitem" to="/logOut">LogOut</Link></li>
                     </div>
                </ul>
            </section> 

            <section className="navbar-anonymous">
                <ul className="navbar-2">
                    
                </ul>
            </section>
            </nav>
        </header>
    );
}
export default Header;