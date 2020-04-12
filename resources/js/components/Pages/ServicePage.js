import React, {Component, Fragment} from 'react';
import Breadcrumb from "../inc/Breadcrumb/Breadcrumb";
import ServiceSection from "../inc/ServiceSection/ServiceSection";
import Footer from "../inc/Footer/Footer";
import TopNavigation from "../inc/TopNavigation/TopNavigation";


class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="My Services" />
                <Breadcrumb breadcrumb="My Services"/>
                <ServiceSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;
