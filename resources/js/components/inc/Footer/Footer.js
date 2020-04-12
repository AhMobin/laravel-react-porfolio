import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";

class Footer extends Component {

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerCard">
                    <Row>
                        <Container>
                            <Row>
                                <Col lg={3} md={6} sm={12} className="text-justify">
                                    <h1 className="footerTitle">Follow Me</h1>
                                    <a className="socialLinks" href="#"> <FontAwesomeIcon className="checkIcon" icon={faFacebook} /> Facebook</a><br/>
                                    <a className="socialLinks" href="#"> <FontAwesomeIcon className="checkIcon" icon={faTwitter} />Twitter</a><br/>
                                    <a className="socialLinks" href="#"> <FontAwesomeIcon className="checkIcon" icon={faLinkedin} />LinkedIn</a>

                                </Col>
                                <Col lg={3} md={6} sm={12} className="text-justify">
                                    <h1 className="footerTitle">Address</h1>
                                    <p className="reviewDesc">#567/58 Rupganj-Narayanganj</p>
                                    <p className="reviewDesc"><FontAwesomeIcon icon={faEnvelope} className="footerIcon" />ahmobin.cse@gmail.com</p>
                                    <p className="reviewDesc"><FontAwesomeIcon icon={faPhone} className="footerIcon" />01620327185</p>
                                </Col>
                                <Col lg={3} md={6} sm={12} className="text-justify">
                                    <h1 className="footerTitle">Information</h1>
                                    <Link to="/about" className="footerLinks">About Me</Link><br/>
                                    <a href="#" className="footerLinks">My Resume</a><br/>
                                    <Link to="/contact" className="footerLinks">Contact Me</Link>
                                </Col>
                                <Col lg={3} md={6} sm={12} className="text-justify">
                                    <h1 className="footerTitle">Legal</h1>
                                    <Link to="/terms-and-conditions" className="footerLinks">Terms And Condition</Link><br/>
                                    <Link to="/privacy-policy" className="footerLinks">Privacy And Policy</Link>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>


                <Container fluid={true} className="text-center copyRight">
                    <p className="copyrightLink">Abu Horaira Mobin &copy; 2020</p>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;
