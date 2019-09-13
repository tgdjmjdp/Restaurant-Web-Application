import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link, Redirect } from 'react-router-dom';
import {
    MDBModal,
    MDBBtn,
    MDBModalBody,
    MDBModalHeader,
    MDBInput,
    MDBIcon,
    MDBCol,

} from "mdbreact";

// function

import {
    toggleSideNav,
    toggleAuthModal,
    toggleSwitchModal
} from '../../redux/actions/navAction'

import {
    registerUser,
    loginUser
} from '../../redux/actions/authAction'

import {
    fontStyle
} from '../../Styles/font'

// components



// Init

const AuthModalForm = ({
    toggleAuthModal,
    toggleSwitchModal,
    registerUser,
    loginUser,
    navState: {
        authModal,
        switchModal
    },
    authState: {
        isRegistered,
        isLogin
    }
}) => {

    

    const classes = fontStyle();

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
        e.preventDefault();
        loginUser({
            loginEmail,
            loginPassword
        });
    }

    const submitRegister = e => {

        e.preventDefault();
        if (e.target.regPassword.value === e.target.regConfirm.value) {
            registerUser({
                regUsername,
                regEmail,
                regPassword
            })
        }
    }
    if(isLogin === true){
        return <Redirect to='/' />
    }else{
        
    }
    return (
        <React.Fragment>
            <MDBModal
                className={classes.laoFont}
                isOpen={authModal}
                toggle={() => toggleAuthModal()}>
                {
                    switchModal === false ? (
                        <div className="animated fadeIn">
                            <MDBModalHeader
                                className="text-center border-bottom-0"
                                titleClass="w-100 font-weight-bold"
                                toggle={() => toggleAuthModal()}
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
                                        style={{ color: "#2bbbad", padding: "0px" }}
                                        className=" grey-text mb-2 "
                                    >

                                        <MDBCol>
                                            <MDBInput
                                                label="ປ້ອນອີເມວ"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                name="loginEmail"
                                                value={loginEmail}
                                                onChange={e => setLoginValue(e)}
                                                success="right"
                                            />
                                        </MDBCol>
                                        <MDBCol>
                                            <MDBInput
                                                label="ປ້ອນລະຫັດຜ່ານ"
                                                icon="lock"
                                                group
                                                type="password"
                                                name="loginPassword"
                                                value={loginPassword}
                                                validate
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
                                                        onClick={() => toggleSwitchModal()}
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

                            isRegistered === false ? (
                                <div className="animated fadeIn">
                                    <MDBModalHeader
                                        className="text-center border-bottom-0"
                                        titleClass="w-100 font-weight-bold"
                                        toggle={() => toggleAuthModal()}
                                    >
                                        <MDBCol
                                            className="mt-3 animated fadeIn"
                                        >
                                            <MDBBtn
                                                onClick={() => toggleSwitchModal()}
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
                            ) : (
                                    <div className="animated fadeIn">
                                        <MDBModalHeader
                                            className="text-center border-bottom-0"
                                            titleClass="w-100 font-weight-bold"
                                            toggle={() => toggleAuthModal()}
                                        >
                                        </MDBModalHeader>
                                        <MDBModalBody className="animated fadeIn">
                                            <div className="mx-3 mb-4">
                                                <div className="text-center my-5">
                                                    <h1>ສຳເລັດ</h1>
                                                </div>
                                                <MDBCol>
                                                    <div className="d-flex justify-content-center flex-wrap">
                                                        <div className="mt-5 ">
                                                            <MDBBtn
                                                                className="m-0"
                                                                onClick={() => toggleSwitchModal()}
                                                            >
                                                                <span className="h6">
                                                                    ເຂົ້າສູ່ລະບົບ
                                                                </span>
                                                            </MDBBtn>
                                                        </div>
                                                    </div>
                                                </MDBCol>
                                            </div>
                                        </MDBModalBody>
                                    </div>
                                )
                        )
                }
            </MDBModal>
        </React.Fragment>
    )
}

AuthModalForm.propTypes = {
    toggleSideNav: PropTypes.func.isRequired,
    toggleSwitchModal: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    navState: PropTypes.object.isRequired,
    authState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer,
    authState: state.authReducer
})

export default connect(mapStateToProps, {
    toggleSideNav,
    toggleAuthModal,
    toggleSwitchModal,
    registerUser,
    loginUser
})(AuthModalForm)
