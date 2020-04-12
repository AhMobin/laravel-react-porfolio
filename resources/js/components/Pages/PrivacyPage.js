import React, {Component, Fragment} from 'react';
import Breadcrumb from "../inc/Breadcrumb/Breadcrumb";
import PrivacyPolicy from "../inc/PrivacyPolicy/PrivacyPolicy";
import Footer from "../inc/Footer/Footer";
import TopNavigation from "../inc/TopNavigation/TopNavigation";


class PrivacyPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy Policy"/>
                <Breadcrumb breadcrumb="Privacy Policy" />
                <PrivacyPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPage;
