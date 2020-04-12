import React, {Component, Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/custom.css"

import WhiteLogo from "../../assets/images/navlogo.svg";
import BlueLogo from "../../assets/images/navlogoScroll.svg";
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {

    constructor(props) {
        super();
        this.state = {
            navBarTitle:"navTitle",
            navBarLogo:[WhiteLogo],
            navBG:"navBackground",
            navBarItem:"navItem",
            navVariant:"dark",
            pageTitle:props.title,
        }
    }

    onScroll = () => {
        if(window.scrollY>150){
            this.setState({navBarTitle:'navTitleScroll', navBarLogo:[BlueLogo], navBG:"navBackgroundScroll",navBarItem:"navItemScroll",navVariant:"light"})
        }
        else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle', navBarLogo:[WhiteLogo], navBG:"navBackground",navBarItem:"navItem",navVariant:"dark"})
        }
    };

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll);
    }


    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle} | Abu Horaira Mobin</title>
                <Navbar fixed="top" className={this.state.navBG} collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    {/*<Navbar.Brand> <NavLink to="/" className={this.state.navBarTitle}><img src={this.state.navBarLogo}/> AH Mobin</NavLink> </Navbar.Brand>*/}
                    <Navbar.Brand> <NavLink to="/" className={this.state.navBarTitle}>AH Mobin</NavLink> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="ml-auto">
                            <Nav.Link> <NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/services">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/projects">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{ color:'#00a8ee' }} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;
