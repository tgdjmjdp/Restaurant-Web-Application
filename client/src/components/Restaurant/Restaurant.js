import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBCard,
    MDBCardUp,
    MDBAvatar,
    MDBCardImage,
    MDBCardTitle,
    MDBCardBody,
    MDBCardText,
    MDBBtn
} from 'mdbreact'

// functions

import { getRestById, clearRestState } from '../../redux/actions/restAction'
import { fontStyle } from '../../Styles/font'
import { width } from '@material-ui/system'

// components



const Restaurant = ({
    getRestById,
    match,
    restState: {
        restData
    }
}) => {

    React.useEffect(() => {
        getRestById(match.params.rest_id);
    }, [getRestById]);

    return (

        restData === null ? (
            <div
                style={{
                    zIndex: '999',
                    top: '0',
                    left: '0',
                    bottom: '0',
                    right: '0',
                    height: '2em',
                    width: '2em',
                    position: 'fixed',
                    margin: 'auto'
                }}
            >
                <div className="spinner-grow text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ) : (
                <MDBContainer fluid>
                    <MDBRow>
                        <div>
                            <MDBCard>
                                <MDBCardImage
                                    cascade
                                    className="img-fluid "
                                    style={{ 
                                        width: '100%',
                                        height: '300px'
                                     }}
                                    src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                                />
                                <MDBCardBody>
                                    <MDBCardTitle>Card title</MDBCardTitle>
                                    <MDBCardText>
                                        Some quick example text to build on the card title and make
                                        up the bulk of the card&apos;s content.
                                    </MDBCardText>
                                    <MDBBtn href="#">MDBBtn</MDBBtn>
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBRow>
                </MDBContainer>
            )

    )
}

Restaurant.propTypes = {
    restState: PropTypes.object.isRequired,
    clearRestState: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    restState: state.restReducer
})

export default connect(mapStateToProps, {
    clearRestState,
    getRestById
})(Restaurant)