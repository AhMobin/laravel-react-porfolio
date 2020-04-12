import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import {Player, BigPlayButton} from "video-react";

class Video extends Component {

    constructor() {
        super();

        this.state = {
            show:false,
        }
    }

    modalClose = () => this.setState({show:false});
    modalOpen = () => this.setState({show:true});

    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col className="videoCard">
                            <div>
                                <p className="videoCardTitle">How I Do</p>
                                <p className="videoCardDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cum, eius enim fugiat harum, hic illum ipsam iste itaque magnam maiores, possimus quidem repudiandae similique tempore ullam vel veritati magnam maiores, possimus quidem repudiandae similique tempore ullam vel veritatis voluptatum!</p>
                                <p className="text-center"> <FontAwesomeIcon onClick={this.modalOpen} className="playerIcon" icon={faPlayCircle}/> </p>
                            </div>
                        </Col>
                    </Row>
                </Container>


                {/*  Modal  */}
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose} className="mr-auto">
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default Video;
