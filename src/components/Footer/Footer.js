import React from 'react'
import FooterLogo from './jpheart.png'
import '../../styles/Footer.css'

function Footer() {
    return (
        <footer className="footer">&copy; 2020
                <img className="JPHeart" src={FooterLogo} alt="FooterLogo" /><span className="footer-title">aesthetic</span> • Web Design
        </footer >
    )
};

export default Footer;