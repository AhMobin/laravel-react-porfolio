import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/custom.css";

class Breadcrumb extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topBreadcrumb p-0">
                    <Row>
                        <Col className="BreadcrumbContent">
                            <p>{this.props.breadcrumb}</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Breadcrumb;
