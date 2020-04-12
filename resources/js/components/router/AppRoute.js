import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ProjectPage from "../Pages/ProjectPage";
import ServicePage from "../Pages/ServicePage";
import ContactPage from "../Pages/ContactPage";
import ProjectDetailsPage from "../Pages/ProjectDetailsPage";
import TermsConditionPage from "../Pages/TermsConditionPage";
import PrivacyPage from "../Pages/PrivacyPage";


class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/projects" component={ProjectPage} />
                    <Route exact path="/services" component={ServicePage} />
                    <Route exact path="/contact" component={ContactPage} />
					<Route exact path="/project-details" component={ProjectDetailsPage} />
                    <Route exact path="/terms-and-conditions" component={TermsConditionPage} />
                    <Route exact path="/privacy-policy" component={PrivacyPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;
