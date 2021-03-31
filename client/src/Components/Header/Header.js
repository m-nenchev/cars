import { Link } from 'react-router-dom';

import './Header.css'


function Header() {
    return (
        <header className="conteiner">
         <nav className="navbar">
            <section className="header">
               <ul className="navbar-1">
                  <li><Link className="listitem" to="/" >Home</Link></li>
                  <li><Link className="listitem" to="/about/forum" >Forum</Link></li>
                  <li><Link className="listitem" to="/about/image" >Image</Link></li>
                  <li><Link className="listitem" to="/cars" >Cars</Link></li>
                </ul>
            </section> 

            <section className="navbar-anonymous">
                <ul className="navbar-2">
                    <li><Link className="listitem" to="/contact" >Register</Link></li>
                    <li><Link className="listitem" to="/login" >Login</Link></li>
                </ul>
            </section>
            </nav>
        </header>
    );
}
export default Header;