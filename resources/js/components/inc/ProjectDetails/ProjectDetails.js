import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Project from "../../assets/images/Project.png";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                       <Col lg={6} md={6} sm={12}>
                           <img src={Project} className="projectBigThumb"/>
                       </Col>
                       <Col lg={6} md={6} sm={12}>
                           <h1 className="reviewTitle">Foll Bazzar </h1>
                           <p className="projectDesc">Complete e-commerce app solution for selling fruit online. According to build quality, data loading speed this is the best one </p>
                           <ul>
                               <li className="projectDescList">Unlimited Dynamic Product Category</li>
                               <li className="projectDescList">Unlimited Dynamic Product Category</li>
                               <li className="projectDescList">Unlimited Dynamic Product Category</li>
                               <li className="projectDescList">Unlimited Dynamic Product Category</li>
                               <li className="projectDescList">Unlimited Dynamic Product Category</li>
                               <li className="projectDescList">Unlimited Dynamic Product Category</li>
                               <li className="projectDescList">Unlimited Dynamic Product Category</li>
                               <li className="projectDescList">Unlimited Dynamic Product Category</li>
                           </ul>
                           <Button className="btn btn-primary">Live Preview</Button>
                       </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;