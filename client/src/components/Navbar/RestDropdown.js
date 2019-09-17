import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../../index.css'
import {
    MDBNavItem,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBIcon
} from "mdbreact";

// function

import store from '../../redux/store'

const RestDropdown = ({
    authState: { myRestList }
}) => {

    return (
        <div
            style={{
                maxHeight: "200px",
            }}
            className="overflow-auto "
        >
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
        </div>
    )
}

RestDropdown.propTypes = {
    restState: PropTypes.object.isRequired,
    authState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    restState: state.restReducer,
    authState: state.authReducer,
})

export default connect(mapStateToProps, {

})(RestDropdown)
