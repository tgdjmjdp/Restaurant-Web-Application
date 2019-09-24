import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// material 

import {
    MDBCol,
    MDBBtn,
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle
} from 'mdbreact'

// components



// functions

import { loadFood } from '../../../../redux/actions/foodAction'

const RestFood = ({
    match,
    loadFood,
    foodState: {
        foodData
    }

}) => {

    const restID = match.params.rest_id

    React.useEffect(() => {
        loadFood(restID)
    }, [loadFood, restID])

    return (
        <React.Fragment>

            <MDBRow >
                <MDBCol size="6" >
                    <Link to={`/rest/${match.params.rest_id}/home/addfood`}>
                        <MDBBtn rounded className="m-0" >
                            ເພີ່ມອາຫານ
                            </MDBBtn>
                    </Link>
                </MDBCol>
                <MDBCol lsize="6" >
                    <select className="browser-default custom-select">
                        <option>Choose your option</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </MDBCol>
            </MDBRow>
            <hr />
            <MDBRow >
                {
                    foodData === null ? (
                        <React.Fragment>

                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                {
                                    foodData.map(
                                        (theFood) =>

                                            <MDBCol
                                                lg="6"
                                                md="6"
                                                xm="6"
                                                xs="6"
                                                key={theFood._id}
                                            >
                                                <Link to={"/food/" + theFood._id}>
                                                    <MDBCard>
                                                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
                                                        <MDBCardBody>
                                                            <MDBCardTitle>
                                                                {
                                                                    theFood.name
                                                                }
                                                            </MDBCardTitle>
                                                        </MDBCardBody>
                                                    </MDBCard>
                                                </Link>

                                            </MDBCol>
                                    )
                                }
                            </React.Fragment>
                        )
                }
            </MDBRow>
        </React.Fragment >
    )
}

RestFood.propTypes = {

    foodState: PropTypes.object.isRequired,

    loadFood: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({

    foodState: state.foodReducer

})

export default connect(mapStateToProps, { loadFood })(RestFood)
