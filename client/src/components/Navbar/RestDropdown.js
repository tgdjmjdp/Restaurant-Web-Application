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
                maxHeight: "250px",
            }}
            className="overflow-auto scrollbar scrollbar-default"
        >
            {
                myRestList.length > 0 ? (
                    myRestList.map(myRest => (
                        <Link
                            style={{ maxWidth: "300px" }}
                            key={myRest._id}
                            className="p-0"
                            to={"/rest/" + myRest._id}
                        >
                            <MDBDropdownItem >
                                <span className="text-break text-wrap">
                                    {
                                        myRest.name
                                    }
                                </span>
                            </MDBDropdownItem>
                        </Link>
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
