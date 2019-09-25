import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBIcon,
} from 'mdbreact'

// function 

import { fontStyle } from '../../../Styles/font'

// components

import RestFood from './Content/RestFood'
import AddFood from '../../Food/AddFood'

const RestAsset = ({
    restState: {
        restData
    }
}) => {

    const classes = fontStyle();

    return (
        <React.Fragment>
            <MDBContainer fluid className={classes.laoFont}>
                <MDBRow className="pb-5 px-0 pt-5">
                    <MDBCol className="d-none d-md-block" size="3">
                        <MDBRow end>
                            <MDBCol
                                style={{ maxWidth: '300px' }}
                                className="pl-0"
                            >
                                <div className="p-3 rounded bg-white">
                                    <h6 className="font-weight-bold ">
                                        ເມນູ
                                    </h6>
                                    <List >
                                        <Link to={`/rest/${restData._id}/home/food`} className="text-dark">
                                            <ListItem className="" button>
                                                <ListItemIcon>
                                                    <MDBIcon size="lg" icon="concierge-bell" />
                                                </ListItemIcon>
                                                <ListItemText className="text-wrap text-break">
                                                    <span style={{ fontFamily: "Saysettha OT" }}>
                                                        ອາຫານ
                                        </span>
                                                </ListItemText>
                                            </ListItem>
                                        </Link>
                                        <Link to={`/rest/${restData._id}/home/promotion`} className="text-dark">
                                            <ListItem button>
                                                <ListItemIcon>
                                                    <MDBIcon size="lg" icon="tag" />
                                                </ListItemIcon>
                                                <ListItemText className="text-wrap text-break">
                                                    <span style={{ fontFamily: "Saysettha OT" }}>
                                                        ໂປຣໂມຊັ່ນ
                                        </span>
                                                </ListItemText>
                                            </ListItem>
                                        </Link>
                                        <Link to={`/rest/${restData._id}/home/vibe`} className="text-dark">
                                            <ListItem button>
                                                <ListItemIcon>
                                                    <MDBIcon size="lg" icon="eye" />
                                                </ListItemIcon>
                                                <ListItemText className="text-wrap text-break">
                                                    <span style={{ fontFamily: "Saysettha OT" }}>
                                                        ບັນຍາກາດ
                                        </span>
                                                </ListItemText>
                                            </ListItem>
                                        </Link>
                                        <Link to={`/rest/${restData._id}/home/seat`} className="text-dark">
                                            <ListItem button>
                                                <ListItemIcon>
                                                    <MDBIcon size="lg" icon="chair" />
                                                </ListItemIcon>
                                                <ListItemText className="text-wrap text-break">
                                                    <span style={{ fontFamily: "Saysettha OT" }}>
                                                        ໂຕະ/ບ່ອນນັ່ງ
                                        </span>
                                                </ListItemText>
                                            </ListItem>
                                        </Link>
                                    </List>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol className="p-0" size="6">
                        <MDBContainer>
                            <MDBRow center>
                                <MDBCol className="p-0">
                                    <div className="p-3 rounded bg-white ">
                                        <Route path={`/rest/:rest_id/home/food`} component={RestFood} />
                                        <Route path="/rest/:rest_id/home/addfood" component={AddFood} />
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol size="3">
                        <MDBRow>
                            <MDBCol className="pr-0  d-none d-lg-block" >
                                <div className="p-3 rounded  bg-white ">
                                    XXXXXXXXXXXXX
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </React.Fragment>
    )
}

RestAsset.propTypes = {
    restState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    restState: state.restReducer
})

export default connect(mapStateToProps, {})(RestAsset)
