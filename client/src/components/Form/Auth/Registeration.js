import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import {
    MDBBtn,
    MDBModalBody,
    MDBInput,
    MDBCol
} from "mdbreact";

const Registeration = ({
    navState: {
        sidebarOpen
    }
}) => {



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

    const submitHandler = (e) => {
        e.preventDefault();
        e.target.className += " was-validated";
    }

    const validateInput = e => {
        if(e.target.name === 'name'){
            console.log('====================================');
            console.log("jjjjjjjjjjjjj");
            console.log('====================================');
        }
    }

    return (
        <React.Fragment>
            <MDBModalBody className="animated fadeIn">
                <form
                    onSubmit={(e) => submitHandler(e)}
                    noValidate
                    className="mx-3 grey-text mb-2 needs-validation"
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
                            onChange={e => validateInput(e)}
                            
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
                            <div className="invalid-feedback">
                                ກະລຸນາປ້ອນອີເມວໃຫ້ຖືກຮູບແບບ <br /> ຕົວຢ່າງ: "example@email.com"
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
                                ລະຫັດຜ່ານຕ້ອງຫຼາຍກວ່າ 8 ໂຕຂື້ນໄປ
                                </div>
                            <div className="valid-feedback">
                                Looks good!
                                </div>
                        </MDBInput>
                    </MDBCol>
                    <div className="d-flex justify-content-between flex-wrap">
                        <div>
                            <MDBBtn
                                type="submit"
                                className="m-0"
                            >
                                <Typography>
                                    ລົງທະບຽນ
                                    </Typography>
                            </MDBBtn>
                        </div>
                    </div>
                </form>
            </MDBModalBody>
        </React.Fragment>
    )
}

Registeration.propTypes = {
    navState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer
})

export default connect(mapStateToProps, {})(Registeration)
