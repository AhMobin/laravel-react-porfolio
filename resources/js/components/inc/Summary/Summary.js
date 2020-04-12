import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import CountUp from "react-countup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import VisibilitySensor from "react-visibility-sensor";


class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryParallax">
                    <Row>
                        <Col lg={8} md={6} sm={12}>
                            <Row className="countSection">
                                <Col>
                                    <h1 className="countNumber">
                                        <CountUp start={0} end={100}>
                                            {({ countUpRef, start}) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Total Projects</h4>
                                    <hr className="bg-white w-25" />
                                </Col>
                                <Col>
                                    <h1 className="countNumber">
                                        <CountUp start={0} end={100}>
                                            {({ countUpRef, start}) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <h4 className="countTitle">Total Projects</h4>
                                    <hr className="bg-white w-25" />
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={4} md={6} sm={12}>
                            <Card style={{ width: '18rem'}} className="summaryCard">
                                <Card.Body>
                                    <Card.Title className="cardTitle">How I Work</Card.Title>
                                    <Card.Text>
                                        <p className="cardSubTitle"><FontAwesomeIcon className="checkIcon" icon={faCheckCircle} />Requirement Gather</p>
                                        <p className="cardSubTitle"><FontAwesomeIcon className="checkIcon" icon={faCheckCircle} /> System Analysis</p>
                                        <p className="cardSubTitle"><FontAwesomeIcon className="checkIcon" icon={faCheckCircle} /> Coding Testing</p>
                                        <p className="cardSubTitle"><FontAwesomeIcon className="checkIcon" icon={faCheckCircle} /> Implementation</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;
