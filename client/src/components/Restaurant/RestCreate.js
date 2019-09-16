import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// MDB

import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBBtn,
} from "mdbreact";

// function

import { fontStyle } from '../../Styles/font'
import { createRest, clearRestState } from '../../redux/actions/restAction'

const RestCreate = ({
    createRest,
    clearRestState,
    authState: { userData },
    restState: { restData, restCreated }
}) => {

    const fontclass = fontStyle();

    const [restCreate, setRestCreate] = React.useState({
        restName: ''
    });

    const { restName } = restCreate;

    const setRestValue = e => setRestCreate({
        ...restCreate, [e.target.name]: e.target.value
    });

    const submitRestCreate = async e => {
        e.preventDefault();
        const isCreated = await createRest({
            restName
        });
        if (typeof isCreated !== 'undefined') {
            console.log('============== rest_CREATE_SUBMIT ======================');
            console.log(isCreated.rest.data._id);
            console.log('====================================');
        }
    }

    if (restCreated !== false) {
        
        clearRestState();
        return <Redirect to={'/rest/' + restData._id} />
        
    }



    return (
        <React.Fragment>
            <div className={fontclass.laoFont}>
                <MDBRow className="h-100">
                    <MDBCol md="8" className="mx-auto  ">
                        <MDBContainer
                            className="grey lighten-5 p-5"
                            header="Material input groups"
                            description="Material Design styling for Bootstrap Input Group component"
                        >
                            <form
                                onSubmit={e => submitRestCreate(e)}
                            >
                                <p className="h4 text-center mb-4">Sign in</p>
                                <label htmlFor="regName" className="grey-text">
                                    ຊື່ຮ້ານອາຫານ
                                </label>
                                <input
                                    type="text"
                                    id="regName"
                                    name="restName"
                                    className="form-control"
                                    onChange={e => setRestValue(e)}
                                    value={restCreate.restName}
                                />
                                <br />
                                <div className="text-center mt-4">
                                    <MDBBtn color="indigo" type="submit">
                                        ສ້າງ
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </div>
        </React.Fragment>
    )
}

RestCreate.propTypes = {
    authState: PropTypes.object.isRequired,
    restState: PropTypes.object.isRequired,
    createRest: PropTypes.func.isRequired,
    clearRestState: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    authState: state.authReducer,
    restState: state.restReducer
})

export default connect(mapStateToProps, {
    createRest,
    clearRestState
})(RestCreate)

