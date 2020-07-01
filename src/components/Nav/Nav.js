import React from 'react'
import Logo from './jpaesthiticOfficialLogo.jpg'
import Nav from 'react-bootstrap/Nav'
import '../../styles/Nav.css'

function Navbar() {
    return (
        <>
            <nav className="topnav">
                {/* <!-- Logo --> */}
                <img className="logo" src={Logo} alt="Logo" />
                {/* <!-- Navigation links (hidden by default) --> */}
                <Nav className="justify-content-end" variant="pills" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </nav>
        </>
    )
};

export default Navbar;