import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";

class Technology extends Component {

    constructor() {
        super();

        this.state = {
            data:[
                {
                    Technology: 'HTML',
                    Skills:'80'
                },
                {
                    Technology: 'CSS',
                    Skills:'70'
                },
                {
                    Technology: 'Bootstrap',
                    Skills:'75'
                },
                {
                    Technology: 'SASS',
                    Skills:'50'
                },
                {
                    Technology: 'PHP',
                    Skills:'60'
                },
                {
                    Technology: 'JavaScript',
                    Skills:'45'
                },
                {
                    Technology: 'jQuery',
                    Skills:'50'
                },
                {
                    Technology: 'React',
                    Skills:'25'
                },
            ]
        }
    }


    render() {
        let blue = "rgba(0,115,230,0.8)";

        return (
            <Fragment>
                <Container>
                    <h1 className="contentTitle">Technology Uses</h1>
                    <Row>
                        <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey="Technology"/>
                                    <Tooltip/>
                                    <Bar dataKey="Skills" fill={blue}>
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                        </Col>

                        <Col lg={6} md={12} sm={12} className="analysisContent">
                            <p>
                                To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities.</p>
                            <p>
                                I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section.</p>
                            <p>
                                Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Technology;
