import React, {Component, Fragment} from 'react';
import Breadcrumb from "../inc/Breadcrumb/Breadcrumb";
import AllProjects from "../inc/AllProjects/AllProjects";
import Footer from "../inc/Footer/Footer";
import TopNavigation from "../inc/TopNavigation/TopNavigation";



class ProjectPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="My Projects" />
                <Breadcrumb breadcrumb="All Projects"/>
                <AllProjects/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ProjectPage;
