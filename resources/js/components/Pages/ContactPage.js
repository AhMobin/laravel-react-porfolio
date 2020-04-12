import React, {Component, Fragment} from 'react';
import Breadcrumb from "../inc/Breadcrumb/Breadcrumb";
import ContactSection from "../inc/ContactSection/ContactSection";
import Footer from "../inc/Footer/Footer";
import TopNavigation from "../inc/TopNavigation/TopNavigation";


class ContactPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact Me"/>
                <Breadcrumb breadcrumb="Contact Me"/>
                <ContactSection/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ContactPage;
