import React, {Component, Fragment} from 'react';
import Breadcrumb from "../inc/Breadcrumb/Breadcrumb";
import ProjectDetails from "../inc/ProjectDetails/ProjectDetails";
import Footer from "../inc/Footer/Footer";
import TopNavigation from "../inc/TopNavigation/TopNavigation";


class ProjectDetailsPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Project Detail"/>
                <Breadcrumb breadcrumb="Project Detail" />
                <ProjectDetails/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectDetailsPage;
