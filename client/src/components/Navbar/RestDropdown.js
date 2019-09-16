import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {
    MDBNavItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon
} from "mdbreact";

// function

import {
    getMyRests
} from './../../redux/actions/restAction'
import store from '../../redux/store'

const RestDropdown = ({
    restState: { myRestList }
}) => {

    React.useEffect(() => {
        store.dispatch(getMyRests());
    }, [])

    return (
        <React.Fragment>
            {
                myRestList.length > 0 ? (
                    myRestList.map(myRest => (
                        <MDBDropdownItem key={myRest._id} >
                            <Link className="" to={"/rest/" + myRest._id} >
                                {
                                    myRest.name
                                }
                            </Link>
                            {/* <span style={{ fontFamily: "Saysettha OT" }} className="">

                            </span> */}
                        </MDBDropdownItem>
                    ))
                ) : (
                        <MDBDropdownItem>
                            <span style={{ fontFamily: "Saysettha OT" }} className="">
                                ບໍ່ພບົຮ້ານອາຫານ
                            </span>
                        </MDBDropdownItem>
                    )
            }
        </React.Fragment>
    )
}

RestDropdown.propTypes = {
    restState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    restState: state.restReducer
})

export default connect(mapStateToProps, {

})(RestDropdown)
