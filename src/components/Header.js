import {  Link } from "react-router-dom";
import logo from '../assets/icons/logo.svg';
import Nav from "./Nav.js"

const Header = () => {
    return (
        <header>
        <div className="container">
        <div className="header-wrap">
            < Link to="/">
            <div className="nav-logo"><img src={logo} alt="Little Lemon Logo"></img></div></Link>
        <Nav />
        </div></div>
        </header>
        );
    }
    
    export default Header;