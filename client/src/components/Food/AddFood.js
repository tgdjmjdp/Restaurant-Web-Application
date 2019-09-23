import React from 'react'

// material

import {
    MDBRow,
    MDBCol,
    MDBBtn,
} from 'mdbreact';

import CreatableSelect from 'react-select/creatable';

const AddFood = props => {


    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'noodle', label: 'noodle' },
        { value: 'rice', label: 'rice' },
        { value: 'shit', label: 'shit' },
    ];

    const [addFood, setAddFood] = React.useState({
        foodType: [],
        foodName: '',
        foodPrice: ''
    })

    const { foodName, foodPrice } = addFood

    const handleChange = e => {
        if (e !== null) {
            setAddFood({
                ...addFood,
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSelection = e => {
        if ((typeof e !== 'undefined') && (e !== null)) {
            console.log(
                JSON.stringify(e)
            );
            
            setAddFood({
                ...addFood,
                foodType: e.value
            })
        }
    }

    const formSubmit = e => {
        console.log(addFood);
        e.preventDefault()
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

}

export default AddFood
