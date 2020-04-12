import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                       <Col lg={6} md={6} sm={12}>
                            <h1 className="footerTitle">Quick Connect</h1>
                           <Form>
                               <Form.Group>
                                   <Form.Label className="contactDesc">Name</Form.Label>
                                   <Form.Control type="text" />
                               </Form.Group>

                               <Form.Group>
                                   <Form.Label className="contactDesc">Email Address</Form.Label>
                                   <Form.Control type="email" />
                               </Form.Group>

                               <Form.Group>
                                   <Form.Label className="contactDesc">Message</Form.Label>
                                   <Form.Control as="textarea" rows="3" />
                               </Form.Group>

                               <Button variant="primary" type="submit">
                                   Submit
                               </Button>
                           </Form>
                       </Col>
                       <Col lg={6} md={6} sm={12}>
                           <h1 className="footerTitle">Discuss Now</h1>
                           <p className="contactDesc">#567/58 #Word 9, Rupganj-Narayanganj</p>
                           <p className="contactDesc"><FontAwesomeIcon icon={faEnvelope} className="footerIcon" />ahmobin.cse@gmail.com</p>
                           <p className="contactDesc"><FontAwesomeIcon icon={faPhone} className="footerIcon" />01620327185</p>
                       </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;