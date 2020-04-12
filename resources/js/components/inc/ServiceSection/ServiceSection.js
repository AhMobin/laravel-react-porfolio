import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Web from "../../assets/images/icons/web-service.svg";
import Mobile from "../../assets/images/icons/mobile-service.svg";
import Graphic from "../../assets/images/icons/graphic-service.svg";


class ServiceSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceContent">
                                <img src={Web} alt=""/>
                                <h1>Web Application</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio hic omnis quam quas, sint velit! Dicta ea eos libero maiores molestias natus nemo repellat soluta vel, velit. Aspernatur, exercitationem, vel!</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceContent">
                                <img src={Mobile} alt=""/>
                                <h1>Mobile Application</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio hic omnis quam quas, sint velit! Dicta ea eos libero maiores molestias natus nemo repellat soluta vel, velit. Aspernatur, exercitationem, vel!</p>
                            </div>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceContent">
                                <img src={Graphic} alt=""/>
                                <h1>Graphic Design</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio hic omnis quam quas, sint velit! Dicta ea eos libero maiores molestias natus nemo repellat soluta vel, velit. Aspernatur, exercitationem, vel!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ServiceSection;