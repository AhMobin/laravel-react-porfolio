import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import Project from "../../assets/images/Project.png";
import {Link} from "react-router-dom";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mb-5">
                    <h1 className="contentTitle">Recent Projects</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project} style={{padding:'10px'}} />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link to="/project-details" className="customizeButton">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project} style={{padding:'10px'}}  />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link to="/project-details" className="customizeButton">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={4} md={6} sm={12} className="p-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src={Project} style={{padding:'10px'}}  />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDesc">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link to="/project-details" className="customizeButton">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;
