import React from 'react'
import FooterLogo from './jpheart.png'
import '../../styles/Footer.css'

function Footer() {
    return (

        <Footer className="footer">
            <div className="copyright">&copy; 2020</div>
            <img className="JPHeart" src={FooterLogo} alt="FooterLogo" /> 
            <p>aesthetic • Web Design</p>
        </Footer>
    )
};

export default Footer;