import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { fontStyle } from '../../Styles/font'
import Toolbar from '@material-ui/core/Toolbar';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBModal,
    MDBBtn,
    MDBModalBody,
    MDBModalHeader,
    MDBCol,
    MDBNavbarToggler,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon
} from "mdbreact";

// functions 

import {
    toggleSideNav,
    toggleAuthModal
} from '../../redux/actions/navAction'

import {
    logoutUser
} from '../../redux/actions/authAction'

// Components

import AuthModalForm from './AuthModalForm'

const Appbar = ({
    toggleAuthModal,
    toggleSideNav,
    logoutUser,
    navState: {
        sideNav,
        authModal
    },
    authState: {
        isLogin,
        user
    }
}) => {

    const classes = fontStyle();

    const [logoutModal, setLogoutModal] = React.useState(false);

    const logoutHandler = async () => {
        await logoutUser();
        setLogoutModal(!logoutModal);
    }

    const [isOpen, setOpen] = React.useState(false);

    const toggleCollapse = () => {
        setOpen(!isOpen);
    }

    return (
        <React.Fragment>
            <MDBNavbar
                className="pt-0 pb-0 grey "
                color="indigo"
                dark
                expand="sm"
                fixed="top"
                scrolling
            >
                <MDBNavbarBrand className="d-flex" >
                    <MDBNavLink to="#" onClick={() => toggleSideNav()} >
                        <strong className="white-text">
                            <MDBIcon icon="bars" />
                        </strong>
                    </MDBNavLink>
                    <MDBNavLink
                        to="/"
                        button="true">
                        <strong className="white-text">
                            Navbar
                                </strong>
                    </MDBNavLink>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={() => toggleCollapse()} />
                <MDBCollapse isOpen={isOpen} navbar>
                    <MDBNavbarNav right>
                        {
                            isLogin === false ? (
                                <MDBNavItem
                                    onClick={() => toggleAuthModal()}
                                >
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
                            ) : (
                                    <React.Fragment>
                                        <MDBNavItem>
                                            <MDBDropdown>
                                                <MDBDropdownToggle
                                                    className=""
                                                    nav
                                                    color="primary"
                                                >
                                                    <div className=" p-1" >
                                                        <MDBIcon size="2x" icon="bell" />
                                                    </div>
                                                </MDBDropdownToggle>
                                                <MDBDropdownMenu basic>
                                                    <MDBDropdownItem>
                                                        <span style={{ fontFamily: "Saysettha OT" }} className="">
                                                            ແຈ້ງເຕືອນ
                                                        </span>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem divider />
                                                    <MDBDropdownItem
                                                        style={{ fontFamily: "Saysettha OT" }}
                                                        className="align-middle"
                                                    >
                                                        <Link to="/restaurant/create" >
                                                            ເພີ່ມຮ້ານອາຫານ
                                                        </Link>
                                                    </MDBDropdownItem>
                                                </MDBDropdownMenu>
                                            </MDBDropdown>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBDropdown>
                                                <MDBDropdownToggle
                                                    className=""
                                                    nav
                                                    color="primary"
                                                >
                                                    <div className=" p-1" >
                                                        <MDBIcon size="2x" icon="home" />
                                                    </div>
                                                </MDBDropdownToggle>
                                                <MDBDropdownMenu basic>
                                                    <MDBDropdownItem>
                                                        <span style={{ fontFamily: "Saysettha OT" }} className="">
                                                            ໂປຣໄຟລ໌XXXXXXXX
                                                        </span>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem divider />
                                                    <MDBDropdownItem style={{ fontFamily: "Saysettha OT" }} >
                                                        <Link to="/restaurant/create" >
                                                            ເພີ່ມຮ້ານອາຫານ
                                                        </Link>
                                                    </MDBDropdownItem>
                                                </MDBDropdownMenu>
                                            </MDBDropdown>
                                        </MDBNavItem>
                                        <MDBNavItem>
                                            <MDBDropdown>
                                                <MDBDropdownToggle nav caret color="primary">
                                                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"
                                                        style={{ height: "35px", padding: 0 }} alt="" />
                                                </MDBDropdownToggle>
                                                <MDBDropdownMenu basic>
                                                    <MDBDropdownItem>
                                                        <span style={{ fontFamily: "Saysettha OT" }} className="">
                                                            ໂປຣໄຟລ໌
                                                    </span>
                                                    </MDBDropdownItem>
                                                    <MDBDropdownItem divider />
                                                    <MDBDropdownItem
                                                        onClick={() => setLogoutModal(!logoutModal)}
                                                        style={{ fontFamily: "Saysettha OT" }}
                                                        className="align-middle"
                                                    >
                                                        ອອຈາກລະບົບ
                                                </MDBDropdownItem>
                                                </MDBDropdownMenu>
                                            </MDBDropdown>
                                        </MDBNavItem>
                                    </React.Fragment>
                                )
                        }
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            <MDBModal
                className={classes.laoFont}
                isOpen={logoutModal}
                toggle={() => setLogoutModal(!logoutModal)}>
                <div className="animated fadeIn">
                    <MDBModalHeader
                        className="text-center border-bottom-0"
                        titleClass="w-100 font-weight-bold"
                        toggle={() => setLogoutModal(!logoutModal)}
                    >
                    </MDBModalHeader>
                    <MDBModalBody className="animated fadeIn">
                        <div className="mx-3 mb-4">
                            <div className="text-center my-5">
                                <h4>
                                    ເຈົ້າຕ້ອງການອອກຈາກລະບົບແທ້ບໍ?
                                </h4>
                            </div>
                            <MDBCol>
                                <div className="d-flex justify-content-between flex-wrap">
                                    <div className="mt-3">
                                        <MDBBtn
                                            className="m-0"
                                            type="button"
                                            onClick={() => logoutHandler()}
                                        >
                                            <span className="h6">
                                                ຕົກລົງ
                                            </span>
                                        </MDBBtn>
                                    </div>
                                    <div className="mt-3">
                                        <MDBBtn
                                            onClick={() => setLogoutModal(!logoutModal)}
                                            className="m-0"
                                        >
                                            <span className="h6">
                                                ຍົກເລີກ
                                            </span>
                                        </MDBBtn>
                                    </div>
                                </div>
                            </MDBCol>
                        </div>
                    </MDBModalBody>
                </div>
            </MDBModal>
            {/* <AuthModalForm /> */}
        </React.Fragment >
    )
}

Appbar.propTypes = {
    navState: PropTypes.object.isRequired,
    authState: PropTypes.object.isRequired,
    toggleAuthModal: PropTypes.func.isRequired,
    toggleSideNav: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer,
    authState: state.authReducer
})

export default connect(mapStateToProps, {
    toggleSideNav,
    toggleAuthModal,
    logoutUser
})(Appbar)
