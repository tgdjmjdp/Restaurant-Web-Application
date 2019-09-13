import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {
    MDBBtn,
    MDBInput,
    MDBCol,
    MDBContainer,
    MDBAnimation,
    MDBRow,
    MDBJumbotron,
    MDBIcon
} from "mdbreact";
import { loginUser } from '../../redux/actions/authAction'
import { } from '../../Styles/font'

const Login = ({
    loginUser
}) => {

    const [login, setLogin] = React.useState({
        loginEmail: '',
        loginPassword: ''
    });

    const {
        loginEmail,
        loginPassword
    } = login;

    const setLoginValue = e => setLogin({
        ...login, [e.target.name]: e.target.value
    });

    const submitLogin = e => {
        e.preventDefault();
        loginUser({
            loginEmail,
            loginPassword
        });
    }

    return (
        <div className="pt-3" style={{ fontFamily: 'saysettha ot' }}>
            <MDBContainer >
                <MDBAnimation type="zoomIn" duration="500ms">
                    <MDBRow>
                        <MDBCol md="8" className="mx-auto h-100">
                            <MDBJumbotron className="">
                                <div className="pb-3">
                                    <h1 className="text-center">
                                        <MDBIcon icon="css3" brand className="indigo-text mr-w" />
                                        ເຂົ້າສູ່ລະບົບ
                                </h1>
                                </div>
                                
                                <form
                                    onSubmit={e => submitLogin(e)}
                                    style={{ color: "#2bbbad", padding: "0px" }}
                                    className=" grey-text"
                                >
                                    <MDBCol className="pt-3">
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
                                    <MDBCol className="">
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
                                                <MDBBtn className="m-0">
                                                    <span className="h6">
                                                        ຍັງບໍ່ມີບັນຊີ ?
                                </span>
                                                </MDBBtn>
                                            </div>
                                        </div>
                                    </MDBCol>
                                </form>

                            </MDBJumbotron>
                        </MDBCol>
                    </MDBRow>
                </MDBAnimation>
            </MDBContainer>
        </div>
    )
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    authState: state.authReducer
})

export default connect(mapStateToProps, {
    loginUser
})(Login)
