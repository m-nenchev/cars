import { Link, NavLink } from 'react-router-dom';

import './Header.css'


function Header() {
    return (
        <div className="conteiner">
            
            <ul className="header">
                <NavLink activeClassName="listitem" exact={true} to="/" >Home</NavLink>
                <NavLink activeClassName="listitem" exact={true} to="/about/forum" >Forum</NavLink>
                <NavLink activeClassName="listitem" exact={true} to="/about/image" >Image</NavLink>
                <NavLink activeClassName="listitem" exact={true} to="/about/cars" >Cars</NavLink>
                <NavLink activeClassName="listitem" exact={true} to="/contact" >Register</NavLink>
                <NavLink activeClassName="listitem" exact={true} to="/login" >Lsogin</NavLink>
            </ul>
        </div>
    );
}
export default Header;