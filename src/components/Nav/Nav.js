import React from 'react'
import Logo from './jpaesthiticOfficialLogo.jpg'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import '../../styles/Nav.css'

function Navbar() {
    return (
        <>
            <nav className="topnav">
                {/* <!-- Logo --> */}
                <img className="logo" src={Logo} alt="Logo" />
                {/* <!-- Navigation links (hidden by default) --> */}
                <Nav className="justify-content-end" variant="pills" activeKey="/">
                    <Nav.Item>
                        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>About</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/portfolio" className={window.location.pathname === "/Portfolio" ? "nav-link active" : "nav-link"}>Portfolio</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/contact" className={window.location.pathname === "/Contact" ? "nav-link active" : "nav-link"}>Contact</Link>
                    </Nav.Item>
                </Nav>
            </nav>
        </>
    )
};

export default Navbar;