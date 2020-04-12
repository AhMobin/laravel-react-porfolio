import React, {Component, Fragment} from 'react';
import Breadcrumb from "../inc/Breadcrumb/Breadcrumb";
import TermsConditions from "../inc/TermsConditions/TermsConditions";
import Footer from "../inc/Footer/Footer";
import TopNavigation from "../inc/TopNavigation/TopNavigation";


class TermsConditionPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Term And Conditions"/>
                <Breadcrumb breadcrumb="Terms And Condition"/>
                <TermsConditions/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsConditionPage;
