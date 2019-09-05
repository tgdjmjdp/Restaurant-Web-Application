import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleModalAuth, toggleSideNav } from '../../../redux/actions/navAction'
import { Link } from 'react-router-dom';

import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
} from "mdbreact";

// Components

import AuthModalForm from './AuthModalForm'

const Appbar = ({
    toggleModalAuth,
    toggleSideNav,
    navState: {
        sidebarOpen
    }
}) => {
    
    return (
        <React.Fragment>
            <MDBNavbar color="indigo" dark expand="md" fixed="top" scrolling>
                <Link to="/">
                    <MDBNavbarBrand
                        className="py-0 font-weight-bold"
                    >
                        <strong className="align-middle">
                            Home
                        </strong>
                    </MDBNavbarBrand>
                </Link>
                <MDBNavbarNav right>
                    <AuthModalForm />
                </MDBNavbarNav>
            </MDBNavbar>
        </React.Fragment>
    )
}

Appbar.propTypes = {
    navState: PropTypes.object.isRequired,
    toggleModalAuth: PropTypes.func.isRequired,
    toggleSideNav: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer
})

export default connect(mapStateToProps, { toggleModalAuth, toggleSideNav })(Appbar)
