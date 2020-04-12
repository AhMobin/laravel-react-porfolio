import React, {Component, Fragment} from 'react';
import Breadcrumb from "../inc/Breadcrumb/Breadcrumb";
import AboutDescription from "../inc/AboutDescription/AboutDescription";
import Footer from "../inc/Footer/Footer";
import TopNavigation from "../inc/TopNavigation/TopNavigation";


class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="About Me"/>
                <Breadcrumb breadcrumb="About Me"/>
                <AboutDescription/>
                <Footer/>

            </Fragment>
        );
    }
}

export default AboutPage;
