import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={12} lg={12}>
                            <h1 className="footerTitle">Who I Am</h1>
                            <hr/>
                            <p className="reviewDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur cupiditate dignissimos, ea eius exercitationem hic id illum labore natus neque obcaecati omnis praesentium qui sequi tempora veniam voluptas voluptates!</p>

                            <h1 className="footerTitle">My Mission</h1>
                            <hr/>
                            <p className="reviewDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur cupiditate dignissimos, ea eius exercitationem hic id illum labore natus neque obcaecati omnis praesentium qui sequi tempora veniam voluptas voluptates!</p>

                            <h1 className="footerTitle">My Vision</h1>
                            <hr/>
                            <p className="reviewDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur cupiditate dignissimos, ea eius exercitationem hic id illum labore natus neque obcaecati omnis praesentium qui sequi tempora veniam voluptas voluptates!</p>

                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;