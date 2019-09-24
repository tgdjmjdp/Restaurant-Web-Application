import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// material

import {
    MDBRow,
    MDBCol,
    MDBBtn,
} from 'mdbreact';

import CreatableSelect from 'react-select/creatable';

// functions

import { foodAdd } from '../../redux/actions/foodAction'

const AddFood = ({

    foodAdd,
    match

}) => {

    const options = [
        { value: 'xxxxxx', label: 'Chocolate' },
        { value: 'yyyy', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'noodle', label: 'noodle' },
        { value: 'rice', label: 'rice' },
        { value: 'shit', label: 'shit' },
    ];

    const [foodValue, setAddFood] = React.useState({
        foodType: [],
        foodName: '',
        foodPrice: '',
        restID: match.params.rest_id
    })

    const { foodName, foodPrice } = foodValue

    const handleChange = e => {
        if (e !== null) {
            setAddFood({
                ...foodValue,
                [e.target.name]: e.target.value,
            })
        }
    }

    const handleSelection = e => {

        const foodTypes = e.map(
           e => e.value
        )

        setAddFood({
            ...foodValue,
            foodType: foodTypes
        })
    }

    const formSubmit = async e => {
        console.log('============== SUBMIT ======================');
        console.log(foodValue);
        console.log('====================================');
        e.preventDefault()
        const result = await foodAdd(foodValue)
        console.log('============== RESULT ======================');
        console.log(result);
        console.log('====================================');
        
    }

    return (
        <React.Fragment>
            <MDBRow className=" ">
                <MDBCol className="m-auto" size="11" >
                    <p className="h5 mb-5">Sign in</p>
                    <form
                        onSubmit={
                            e => formSubmit(e)
                        }
                    >
                        <div className="grey-text">
                            <label
                                htmlFor="foodName"
                                className="grey-text"
                            >
                                ຊື່ອາຫານ
                            </label>
                            <input
                                type="text"
                                name="foodName"
                                id="foodName"
                                className="form-control"
                                value={foodName}
                                onChange={e => handleChange(e)}
                            />
                            <br />
                            <label
                                htmlFor="foodPrice"
                                className="grey-text"
                            >
                                ລາຄາ
                            </label>
                            <input
                                name="foodPrice"
                                type="number"
                                id="foodPrice"
                                className="form-control"
                                value={foodPrice}
                                onChange={e => handleChange(e)}
                            />
                            <br />
                            <label
                                htmlFor="foodType"
                                className="grey-text">
                                ປະເພດອາຫານ
                            </label>
                            <CreatableSelect
                                name="foodType"
                                id="foodType"
                                placeholder="ເລືອກ..."
                                isClearable
                                isMulti
                                onChange={e => handleSelection(e)}
                                options={options}
                            />
                        </div>
                        <div className="text-center pt-5">
                            <MDBBtn type="submit">
                                ເພີ່ມອາຫານ
                            </MDBBtn>
                        </div>
                    </form>
                </MDBCol>
            </MDBRow>

        </React.Fragment>
    )
}

AddFood.propTypes = {

    foodState: PropTypes.object.isRequired,

    foodAdd: PropTypes.func.isRequired,

}

const mapStateToProps = state => ({

    foodState: state.foodReducer

})

export default connect(mapStateToProps, { foodAdd })(AddFood)
