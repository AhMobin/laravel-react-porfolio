import React, {Component, Fragment} from 'react';
import TopBanner from "../inc/TopBanner/TopBanner";
import Services from "../inc/Services/Services";
import Technology from "../inc/Technologies/Technology";
import Summary from "../inc/Summary/Summary";
import RecentProjects from "../inc/RecentProjects/RecentProjects";
import Video from "../inc/Video/Video";
import Footer from "../inc/Footer/Footer";
import TopNavigation from "../inc/TopNavigation/TopNavigation";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home"/>
                <TopBanner/>
                <Services/>
                <Technology/>
                <Summary/>
                <RecentProjects/>
                <Video/>
                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;
