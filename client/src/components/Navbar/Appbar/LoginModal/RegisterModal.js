import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    toggleModalAuth,
    toggleSideNav
} from '../../../../redux/actions/navAction'
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBInput,
    MDBIcon,
    MDBCol,
    MDBAlert,

} from "mdbreact";

// components

import {
    fontStyle
} from '../../../../Styles/font'

const RegisterModal = ({

}) => {

    const classes = fontStyle();

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        conpassword: ''
    });

    const { name, email, password, conpassword } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    const checkEmail = async e => {
        await onChange(e);
        const text = e.target.value.includes('@');
        if (text) {
            console.log('====================================');
            console.log("YEs");
            console.log('====================================');
        } else {
            console.log('====================================');
            console.log("NO");
            console.log('====================================');
        }
    }

    const submitHandler = async e => {
        e.preventDefault();
        if(e.target.name.value === "qqqqqqqq"){
            console.log('====================================');
            console.log("NO");
            console.log('====================================');
            const nameAlert = "ຊື່ນີ້ມີຄົນໃຊ້ໄປແລ້ວ"
        }
        if (e.target.email.value) {
            const text = e.target.email.value.includes("@" && ".com");
            if (!text) {
                const emailAlert = "ອີເມວຕ້ອງປະກອບດ້ວຍ @ ແລະ .com"
                return
            }
        }
        if (e.target.password.value !== e.target.conpassword.value) {
            const passwordAlert = "ກະລຸນາປ້ອນລະຫັດຜ່ານໃຫ້ກົງກັນ";
        } else {
            e.target.className += " was-validated";
        }
        if ()
    }

    return (
        <React.Fragment>
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
                    onSubmit={(e) => submitHandler(e)}
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
                            name="name"
                            minLength="8"
                            maxLength="30"
                            value={name}
                            onChange={e => onChange(e)}

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
                            name="email"
                            value={email}
                            onChange={e => onChange(e)}
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
                            name="password"
                            value={password}
                            onChange={e => onChange(e)}
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
                            name="conpassword"
                            value={conpassword}
                            onChange={e => onChange(e)}
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
        </React.Fragment>
    )
}

RegisterModal.propTypes = {
    toggleSideNav: PropTypes.func.isRequired,
    toggleModalAuth: PropTypes.func.isRequired,
    navState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer
})

export default connect(mapStateToProps, {
    toggleSideNav,
    toggleModalAuth
})(RegisterModal)
