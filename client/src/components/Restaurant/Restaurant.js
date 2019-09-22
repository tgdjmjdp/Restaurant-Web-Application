import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBRow,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
} from 'mdbreact'

// functions

import { getRestById, clearRestState } from '../../redux/actions/restAction'
import { fontStyle } from '../../Styles/font'


// components

import RestAsset from './Asset/RestAsset'

const useStyles = makeStyles(theme => ({
    banner: {
        [theme.breakpoints.up('md')]: {
            height: "500px"
        },

        objectFit: 'cover',
        height: '300px',
    },
    avatarCol: {
        [theme.breakpoints.up('md')]: {
            justifyContent: "flex-end",
        },
        justifyContent: "center",
        display: "flex",
    },
    restName: {
        [theme.breakpoints.up('sm')]: {
            textAlign: "left",
            color: "white"
        },
        wordBreak: "break-word",
        overflowWrap: "break-word",
        textAlign: "center",
        color: "black"
    }
}));

const Restaurant = ({
    getRestById,
    match,
    restState: {
        restData
    }
}) => {

    const restId = match.params.rest_id;

    const styleFont = fontStyle();

    const styleRest = useStyles();

    React.useEffect(() => {
        getRestById(restId);
    }, [getRestById]);

    return (
        <React.Fragment>
            {
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
                        <React.Fragment>
                            <MDBContainer fluid >
                                <MDBRow>
                                    <div style={{ width: '100%' }} >
                                        <MDBCard style={{ borderRadius: 0 }} >
                                            <div className="position-relative" >
                                                <div className="">
                                                    <MDBCardImage
                                                        cascade
                                                        className={styleRest.banner}
                                                        style={{ width: '100%' }}
                                                        src="https://i.pinimg.com/236x/99/9c/f2/999cf23f342721d0acedbbd92008e32f--super-hero-shirts-ironman.jpg"
                                                    />
                                                </div>
                                                <div style={{ width: "100%", marginTop: "-75px" }} >
                                                    <MDBRow className="p-0 m-0">
                                                        <MDBCol
                                                            lg="3"
                                                            md="3"
                                                            xs="12"
                                                            className={styleRest.avatarCol}
                                                        >
                                                            <div className=" ">
                                                                <Avatar
                                                                    style={{
                                                                        border: "5px white solid",
                                                                        width: "150px",
                                                                        height: "150px",
                                                                    }}
                                                                    alt="Remy Sharp"
                                                                    src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                                                                />
                                                                {/* <div
                                                                    style={{
                                                                        height: '150px',
                                                                        width: '150px',
                                                                        top: '0px',
                                                                        borderRadius: '100px'
                                                                    }}
                                                                    className="position-absolute text-center circle bg-danger"
                                                                >
                                                                    CLICK ME
                                                                </div> */}
                                                            </div>
                                                        </MDBCol>
                                                        <MDBCol
                                                            lg="6"
                                                            md="6"
                                                            xs="12"
                                                        >
                                                            <div style={{ height: "150px", }}>
                                                                <div className="h-50 ">
                                                                    <h1 className={styleRest.restName}>
                                                                        <span >
                                                                            {
                                                                                restData.name
                                                                            }
                                                                        </span>
                                                                    </h1>
                                                                </div>
                                                                <div className="h-50 text-break text-wrap ">
                                                                    IqWrAe8CvqMviBBqkjTqlGVxqrBh5G8mjJk5TNnTwzFLbrXvyMtr4N9N06Syt
                                                    </div>
                                                            </div>
                                                        </MDBCol>
                                                        <MDBCol
                                                            lg="3"
                                                            xs="12"
                                                            md="3"
                                                        >
                                                            <div className="bg-success">
                                                                asdasd
                                                </div>
                                                        </MDBCol>
                                                    </MDBRow>
                                                </div>
                                            </div>
                                            <div className={styleFont.laoFont}>
                                                <MDBCardBody className=" black-text ">
                                                    <MDBContainer>
                                                        <MDBNav className="nav-pills nav-fill">
                                                            <MDBNavItem >
                                                                <MDBNavLink to={`/rest/${match.params.rest_id}/home`}>
                                                                    HOME
                                                            </MDBNavLink>
                                                            </MDBNavItem>
                                                            <MDBNavItem >
                                                                <MDBNavLink to={`/rest/${match.params.rest_id}/asset`}>
                                                                    Restaurant
                                                            </MDBNavLink>
                                                            </MDBNavItem>
                                                            <MDBNavItem >
                                                                <MDBNavLink to={`/rest/${match.params.rest_id}/review`}>
                                                                    Review
                                                            </MDBNavLink>
                                                            </MDBNavItem>
                                                            <MDBNavItem >
                                                                <MDBNavLink to={`/rest/${match.params.rest_id}/dashboard`}>
                                                                    Dashboard
                                                            </MDBNavLink>
                                                            </MDBNavItem>
                                                        </MDBNav>
                                                    </MDBContainer>

                                                </MDBCardBody>
                                            </div>
                                        </MDBCard>
                                    </div>
                                </MDBRow>
                            </MDBContainer>
                            <Route path={`/rest/:rest_id/home`} component={RestAsset} />
                        </React.Fragment>
                    )
            }
        </React.Fragment>
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