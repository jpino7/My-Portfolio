import React from 'react'
import Pic from './Pic.jpg'
import Card from 'react-bootstrap/Card'
import '../../styles/AboutMe.css'

function AboutMe() {
    return (
        <Card className="aboutMe">
            <Card.Body className="card-body">
                <h1>About Me</h1>
                <img className="proimage" src={Pic} alt="Pic" />
                <section className="text">
                    As a licensed and certified pharmacy technician for the last 9 years, I always thought that I
                    would
                    serve my community for the rest of my working years in a local health center pharmacy. I
                    ended
                    up
                    moving forward in my pharmacy career and was given the opportunity to serve patients
                    nationwide
                    while providing software
                    support for a Medication Therapy Management application through my current employer. I am
                    currently
                    employed at SinfoniaRx (a Tabula Rasa HealthCare Company)
                    as a Software Support
                    Specialist. While in my current position I have been
                    exposed to most things development such as:

                    <ul>
                        <li>Code</li>
                        <li>Database (DBVisualizer)</li>
                        <li>Quality Assurance</li>
                        <li>Product Validation</li>
                        <li>Release Management</li>
                        <li>Software Support</li>
                    </ul>

                    <p>While having the exposure to all of these, I decided to further my education and grow in
                    development
                    where it led me to pursue my continued
                    education through the University of Arizona Coding Boot Camp.</p>

                    <p>I am an aspiring web designer with newly developed skills in HTML, CSS, JavaScript, jQuery,
                    JSON,
                    AJAX, Node.js, and responsive web design. I strive to turn your ideas into creativity for
                    your audience. I am capable of designing websites with a focus on mobile-first design that engages the
                    audience while maximizing the user experience.</p>

                    <p>My husband has always told me <b>"If you love what you do, you will never work a day in your
                    life!"</b> This is my motivation and why I have chosen to pursue Web Design!!</p>
                </section>
            </Card.Body >
        </Card >
    )
};

export default AboutMe;