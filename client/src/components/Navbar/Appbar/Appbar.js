import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
} from "mdbreact";

// functions 

import { toggleSideNav, toggleAuthModal } from '../../../redux/actions/navAction'

// Components

import AuthModalForm from './AuthModalForm'

const Appbar = ({
    toggleAuthModal,
    navState: {
        sideNav,
        authModal
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
                    <MDBNavItem onClick={() => toggleAuthModal()}>
                        <MDBNavLink
                            to="#"
                            button="true" >
                            <strong
                                style={{ fontFamily: "Saysettha OT" }}
                                className="align-middle">
                                ເຂົ້າສູ່ລະບົບ
                            </strong>
                        </MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
            <AuthModalForm />
        </React.Fragment>
    )
}

Appbar.propTypes = {
    navState: PropTypes.object.isRequired,
    toggleAuthModal: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer
})

export default connect(mapStateToProps, { toggleSideNav, toggleAuthModal })(Appbar)
