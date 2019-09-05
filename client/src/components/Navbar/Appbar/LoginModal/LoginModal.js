import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBInput,
    MDBIcon,
    MDBCol,
} from "mdbreact";
import {
    connect
} from 'react-redux'

// functions

import {
    toggleModalAuth,
    toggleSideNav,
    toggleModalForm
} from '../../../../redux/actions/navAction'
import {
    fontStyle
} from '../../../../Styles/font'
import { positions } from '@material-ui/system';

// components

import RegisterModal from './RegisterModal'

const LoginModal = ({
    navState: {
        sideNav,
        authModal,
        loginModal,
        registerModal,
        modalForm
    },
    toggleModalAuth,
    toggleSideNav,
    toggleModalForm
}) => {

    const [login, setLogin] = React.useState({
        email: '',
        password: ''
    })

    const { email, password } = login;

    const setValue = e => setLogin({
        ...login, [e.target.name]: e.target.value
    });

    const submitForm = e => {
        e.preventDefault();
        console.log('====================================');
        console.log(login);
        console.log('====================================');
    }

    const classes = fontStyle();

    return (
        <React.Fragment>
            <MDBModal className={classes.laoFont} isOpen={authModal} toggle={() => toggleModalAuth()}>
                {
                    loginModal ?
                        (
                            <div className="animated fadeIn">
                                <MDBModalHeader
                                    className="text-center border-bottom-0"
                                    titleClass="w-100 font-weight-bold"
                                    toggle={() => toggleModalAuth()}
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
                                            onSubmit={e => submitForm(e)}
                                            className={classes.laoFont}
                                            style={{ color: "#2bbbad" }}
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
                                                    name="email"
                                                    value={email}
                                                    onChange={e => setValue(e)}
                                                    success="right"
                                                />
                                            </MDBCol>
                                            <MDBCol>
                                                <MDBInput
                                                    label="ປ້ອນລະຫັດຜ່ານ"
                                                    icon="lock"
                                                    group
                                                    type="password"
                                                    validate
                                                />
                                            </MDBCol>
                                            <MDBCol>
                                                <div className="text-primary mx-0 overflow-hidden">
                                                    <Link
                                                        className="float-left "
                                                        to="/recovery"
                                                        onClick={() => toggleModalAuth()}
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
                                                            onClick={() => toggleModalForm()}
                                                            className="m-0"
                                                        /* onClick={() => handleModalRegister()} */
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
                                    toggle={() => toggleModalAuth()}
                                >
                                    <MDBCol
                                        className="mt-3 animated fadeIn"
                                    >
                                        <MDBBtn
                                            onClick={() => toggleModalForm()}
                                            className="float-left "
                                        >
                                            <MDBIcon icon="angle-left" />
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBModalHeader>
                                <MDBModalBody className="animated fadeIn">
                                    <RegisterModal />
                                </MDBModalBody>
                            </div>
                        )
                }
            </MDBModal>
        </React.Fragment >
    )
}

LoginModal.propTypes = {
    toggleSideNav: PropTypes.func.isRequired,
    toggleModalAuth: PropTypes.func.isRequired,
    navState: PropTypes.object.isRequired,
    toggleModalForm: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer
})

export default connect(mapStateToProps, {
    toggleSideNav,
    toggleModalAuth,
    toggleModalForm
})(LoginModal)
