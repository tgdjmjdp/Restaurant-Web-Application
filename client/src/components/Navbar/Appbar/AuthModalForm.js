import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom';
import {
    MDBNavLink,
    MDBNavItem,
    MDBModal,
    MDBBtn,
    MDBModalBody,
    MDBModalHeader,
    MDBInput,
    MDBIcon,
    MDBCol,
    MDBAlert,

} from "mdbreact";

// function

import {
    toggleSideNav
} from '../../../redux/actions/navAction'
import {
    fontStyle
} from '../../../Styles/font'

// components



const AuthModalForm = ({
    toggleSideNav
}) => {

    const classes = fontStyle();

    const [authModal, setAuthModal] = React.useState(false);

    const [loginModal, setLoginModal] = React.useState(true);

    const [login, setLogin] = React.useState({
        loginEmail: '',
        loginPassword: ''
    });

    const [register, setRegister] = React.useState({
        regUsername: '',
        regEmail: '',
        regPassword: '',
        regConfirm: ''
    });

    const {
        loginEmail,
        loginPassword
    } = login;

    const {
        regUsername,
        regEmail,
        regPassword,
        regConfirm
    } = register;

    const setLoginValue = e => setLogin({
        ...login, [e.target.name]: e.target.value
    });

    const setRegValue = e => setRegister({
        ...register, [e.target.name]: e.target.value
    });

    const submitLogin = e => {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
    }

    const submitRegister = e => {
        console.log('====================================');
        console.log(e);
        console.log('====================================');
    }

    return (
        <React.Fragment>
            <MDBNavItem onClick={() => setAuthModal(!authModal)}>
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
            <MDBModal
                className={classes.laoFont}
                isOpen={authModal}
                toggle={() => setAuthModal(!authModal)}>
                {
                    loginModal ? (
                        <div className="animated fadeIn">
                            <MDBModalHeader
                                className="text-center border-bottom-0"
                                titleClass="w-100 font-weight-bold"
                                toggle={() => setAuthModal(!authModal)}
                            >

                            </MDBModalHeader>
                            <MDBModalBody>
                                <div className="mx-3 mb-4 animated fadeIn">
                                    <div className="text-center">
                                        <div className="pb-3">
                                            <Avatar style={{ margin: 'auto' }}>
                                                <LockOutlinedIcon />
                                            </Avatar>
                                        </div>

                                        <h5 className={classes.laoFont} >
                                            ເຂົ້າສູ່ລະບົບ
                                            </h5>
                                    </div>
                                    <form
                                        onSubmit={e => submitLogin(e)}
                                        className={classes.laoFont}
                                        style={{ color: "#2bbbad", padding: "0px" }}
                                        className=" grey-text mb-2 needs-validation"
                                    >

                                        <MDBCol>
                                            <MDBInput
                                                className="laoFont"
                                                label="ປ້ອນອີເມວ"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                name="loginEmail"
                                                value={loginEmail}
                                                isRequired
                                                onChange={e => setLoginValue(e)}
                                                success="right"
                                            />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput
                                                isRequired
                                                label="ປ້ອນລະຫັດຜ່ານ"
                                                icon="lock"
                                                group
                                                type="password"
                                                name="loginPassword"
                                                value={loginPassword}
                                                validate
                                                name={loginPassword}
                                                onChange={e => setLoginValue(e)}
                                            />
                                        </MDBCol>
                                        <MDBCol>
                                            <div className="text-primary mx-0 overflow-hidden">
                                                <Link
                                                    className="float-left "
                                                    to="/recovery"
                                                /* onClick={() => toggleModalAuth()} */
                                                >
                                                    <h6 className="dark-grey-text">
                                                        ລືມລະຫັດຜ່ານ ?
                                                    </h6>
                                                </Link>
                                            </div>
                                        </MDBCol>
                                        <MDBCol>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <div className="mt-3">
                                                    <MDBBtn
                                                        className="m-0"
                                                        type="submit"
                                                    >
                                                        <span className="h6">
                                                            ເຂົ້າສູ່ລະບົບ
                                                        </span>
                                                    </MDBBtn>
                                                </div>
                                                <div className="mt-3">
                                                    <MDBBtn
                                                        onClick={() => setLoginModal(!loginModal)}
                                                        className="m-0"
                                                    >
                                                        <span className="h6">
                                                            ຍັງບໍ່ມີບັນຊີ ?
                                                        </span>
                                                    </MDBBtn>
                                                </div>
                                            </div>
                                        </MDBCol>
                                    
                                    </form>
                                </div>
                            </MDBModalBody>
                        </div>
                    ) : (
                            <div className="animated fadeIn">
                                <MDBModalHeader
                                    className="text-center border-bottom-0"
                                    titleClass="w-100 font-weight-bold"
                                    toggle={() => setAuthModal(!authModal)}
                                >
                                    <MDBCol
                                        className="mt-3 animated fadeIn"
                                    >
                                        <MDBBtn
                                            onClick={() => setLoginModal(!loginModal)}
                                            className="float-left "
                                        >
                                            <MDBIcon icon="angle-left" />
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBModalHeader>
                                <MDBModalBody className="animated fadeIn">
                                    <div className="mx-3 mb-4">
                                        <div className="text-center">
                                            <div className="pb-3">
                                                <Avatar style={{ margin: 'auto' }}>
                                                    <LockOutlinedIcon />
                                                </Avatar>
                                            </div>
                                            <h5 className={classes.laoFont} >
                                                ລົງທະບຽນສະມາຊິກ
                                            </h5>
                                        </div>
                                        <form
                                            autoComplete="off"
                                            onSubmit={(e) => submitRegister(e)}
                                            noValidate
                                            className=" grey-text mb-2 needs-validation"
                                        >
                                            <MDBCol>
                                                <MDBInput
                                                    label="ປ້ອນຊື່"
                                                    icon="user"
                                                    group
                                                    type="text"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                    required
                                                    name="regUsername"
                                                    minLength="8"
                                                    maxLength="30"
                                                    value={regUsername}
                                                    onChange={e => setRegValue(e)}

                                                >
                                                    <div className="invalid-feedback">
                                                        ກະລຸນາປ້ອນຊື່
                                                    </div>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </MDBInput>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBInput
                                                    label="ປ້ອນອີເມວ"
                                                    icon="envelope"
                                                    group
                                                    type="email"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                    required
                                                    name="regEmail"
                                                    value={regEmail}
                                                    onChange={e => setRegValue(e)}
                                                >
                                                    {
                                                        <MDBAlert color="danger">

                                                        </MDBAlert>
                                                    }
                                                </MDBInput>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBInput
                                                    label="ປ້ອນລະຫັດຜ່ານ"
                                                    icon="lock"
                                                    group
                                                    type="password"
                                                    validate
                                                    required
                                                    name="regPassword"
                                                    value={regPassword}
                                                    onChange={e => setRegValue(e)}
                                                >
                                                    <div className="invalid-feedback">
                                                        ລະຫັດຜ່ານຕ້ອງຫຼາຍກວ່າ 8 ໂຕຂື້ນໄປ
                                                        </div>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </MDBInput>
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBInput
                                                    label="ປ້ອນລະຫັດຜ່ານອີກຄັ້ງ"
                                                    icon="exclamation-triangle"
                                                    group type="password"
                                                    required
                                                    validate
                                                    name="regConfirm"
                                                    value={regConfirm}
                                                    onChange={e => setRegValue(e)}
                                                >
                                                    <div className="invalid-feedback">
                                                        ລະຫັດຜ່ານຕ້ອງຕືກັນ
                                                    </div>
                                                    <div className="valid-feedback">
                                                        Looks good!
                                                    </div>
                                                </MDBInput>
                                            </MDBCol>
                                            <MDBCol>
                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <div>
                                                        <MDBBtn
                                                            type="submit"
                                                            className="m-0"
                                                        >
                                                            <span>
                                                                ລົງທະບຽນ
                                                            </span>
                                                        </MDBBtn>
                                                    </div>
                                                </div>
                                            </MDBCol>
                                        </form>
                                    </div>
                                </MDBModalBody>
                            </div>
                        )
                }
            </MDBModal>
        </React.Fragment>
    )
}

AuthModalForm.propTypes = {
    toggleSideNav: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {
    toggleSideNav
})(AuthModalForm)
