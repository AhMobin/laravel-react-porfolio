import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/custom.css";
import Response from "../../client/Response";
import Url from "../../client/Url";

class TopBanner extends Component {
    constructor() {
        super();

        this.state = {
            header:"",
            subheader:"",
        }
    }
    componentDidMount() {
        Response.GetRequest(Url.banner)
            .then( result => {
                this.setState({
                    header:result[0]['banner_header'],
                    subheader:result[0]['banner_subheader']
                })
            })
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixedBanner">
                    <Row>
                       <Col className="topBannerContent">
                           <h1>{this.state.header}</h1>
                           <p>{this.state.subheader}</p>
                           <Button className="btn btn-primary">More Info</Button>
                       </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;
