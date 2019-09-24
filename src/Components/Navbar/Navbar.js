import React, { Component } from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer, MDBIcon
} from "mdbreact";

import { Logout } from '../../Store/Actions/auth-action'
import { connect } from 'react-redux'

class NavbarPage extends Component {
    state = {
        collapseID: ""
    };

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));


    logout = () => {
        let path = this.props.path
        console.log(path)
        this.props.Logout(path)

    }

    

    render() {
        return (
            <MDBNavbar color="pink darken-3" dark expand="lg">
                <MDBNavbarBrand>
                    <strong className="white-text">FoodTarka</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
                    <MDBNavbarNav right>
                        {
                            this.props.list.map((val, ind) => {
                                return <MDBNavItem key={ind}>
                                    <MDBNavLink className="waves-effect waves-light" to={val.path}>
                                        <MDBIcon icon={this.props.icon} className="mr-1" />{val.name}</MDBNavLink>
                                </MDBNavItem>
                            })
                        }

                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    <MDBIcon icon="user" className="mr-1" />Profile
                                    </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default" right>
                                <MDBNavLink className="waves-effect waves-light" to={this.props.link}>
                                    <MDBDropdownItem>My account</MDBDropdownItem>
                                </MDBNavLink>
                                    <MDBDropdownItem href="#!" onClick={this.logout} >Log out</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>


        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Logout: (path) => dispatch(Logout(path))
    }
}

export default connect(null, mapDispatchToProps)(NavbarPage);