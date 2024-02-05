import React from 'react';
import secLogo from '../assets/icons/secondary_logo2.png';



const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-wrap">
                    <div className="footer-logo">
                    <img src={secLogo} alt="secondary logo"></img>
                </div>
                <div className="footer-items">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                    </div>
                    <div className="footer-items">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href="/">Address</a></li>
                            <li><a href="/">Phone Number</a></li>
                            <li><a href="/">Email</a></li>
                        </ul>
                    </div>
                    <div className="footer-items">
                    <h3>Social Media Links</h3>
                        <ul>
                             <li><a href="/">Facebook</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Twitter</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;