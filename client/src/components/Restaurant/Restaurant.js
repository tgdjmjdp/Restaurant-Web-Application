import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBCard,
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
import { inherits } from 'util';


// components


const useStyles = makeStyles(theme => ({
    banner: {
        [theme.breakpoints.up('md')]: {
            height: "500px"
        },
        
        objectFit: 'cover',
        height: '300px',
    },
}));

const Restaurant = ({
    getRestById,
    match,
    restState: {
        restData
    }
}) => {

    const styleRest = useStyles();

    React.useEffect(() => {
        getRestById(match.params.rest_id);
    }, [getRestById]);

    const theme = useTheme();

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
                        <div
                            style={{
                                width: '100%'
                            }}
                        >
                            <MDBCard
                                style={{
                                    borderRadius: 0
                                }}
                            >
                                <div
                                    className="position-relative"
                                    style={{
                                        marginBottom: "100px"
                                    }}
                                >
                                    <div>
                                        <MDBCardImage
                                            cascade
                                            className={styleRest.banner}
                                            style={{
                                                width: '100%',
                                                
                                            }}
                                            src="data:image/jpeg;base64,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"
                                        />
                                    </div>
                                    <div
                                        style={{
                                            width: "100%",
                                            bottom: "-75px"
                                        }}
                                        className="position-absolute" >
                                        <div
                                            className="d-flex"
                                        >
                                            <Avatar
                                                style={{
                                                    border: "5px white solid",
                                                    width: "150px",
                                                    height: "150px",
                                                    marginLeft: "50px",

                                                }}
                                                alt="Remy Sharp"
                                                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                                            />
                                            <div className="">
                                                <div>
                                                    <h1 className="white-text">
                                                        {
                                                            restData.name
                                                        }
                                                    </h1>
                                                </div>
                                                <div>
                                                    TYPETYPE <br />
                                                    TYPETYPE <br />
                                                    TYPETYPE <br />
                                                    TYPETYPE <br />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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