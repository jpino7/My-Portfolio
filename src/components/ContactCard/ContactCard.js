import React from 'react';
import Card from 'react-bootstrap/Card'
import '../../styles/ContactCard.css'



function ContactCard() {
    return (
        <Card.Body>
                <div className="row">
                    <div className="row-group col-md-7" id="socialmedia">
                        <h4 className="socialmedia">Find Me On:</h4>
                        <a href="https://www.linkedin.com/in/joanna-pino-0b627419a/" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"> </a>
                        <a href="https://github.com/jpino7" className="fa fa-github" target="_blank" rel="noopener noreferrer"> </a>
                    </div>
                    <div className="row-group col-md-7">
                        <h4>Contact Me At:</h4>
                    </div>
                    <div className="row-group col-md-7">
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:pino3789@gmail.com" target="_blank" rel="noopener noreferrer"><h5>pino3789@gmail.com</h5> </a>
                    </div>
                    <div className="row-group col-md-7">
                        <i className="fas fa-mobile"></i>
                        <h5>520.661.9147</h5>
                    </div>
                    <div className="row-group col-md-7">
                        <i className="fas fa-briefcase"></i>
                        <a href="https://documentcloud.adobe.com/link/review?uri=urn:aaid:scds:US:b0d23442-1cd2-4f82-8a4b-1a1806d209a6" target="_blank" rel="noopener noreferrer">
                            <h5>Resume</h5>
                        </a>
                    </div>
                </div>


                <div className="row mt-4">
                    <div className="card mx-auto">
                        <div className="card-body">
                            <blockquote className="blockquote mx-auto">
                                <p>Design can be art. Design can be <span>aesthetics</span>. Design is so simple, that's why it is so
                            complicated.</p>
                                <p className="blockquote-footer">Paul Rand <cite title="Source Title">Good Reads</cite>
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </Card.Body>
            
    )
}

export default ContactCard;
