import React from 'react'

// MDB

import {
    MDBRow,
    MDBCol,
    MDBInputGroup,
    MDBContainer
} from "mdbreact";

const RestCreate = props => {
    return (
        <React.Fragment>
            <MDBRow className="h-100">
                <MDBCol md="6" className="mx-auto  ">
                    <MDBContainer
                        className="grey lighten-5 p-5"
                        header="Material input groups"
                        description="Material Design styling for Bootstrap Input Group component"
                    >
                        <MDBInputGroup
                            material
                            containerClassName="mb-3 mt-0"
                            prepend="@"
                            hint="Username" />
                        <MDBInputGroup
                            material
                            hint="Recipient's username"
                            containerClassName="mb-3 mt-0"
                            append="@example.com"
                        />
                        <MDBInputGroup
                            material
                            label="Your vanity URL"
                            labelClassName="mb-0 ml-2"
                            containerClassName="mb-3 mt-0"
                            prepend="https://example.com/users/"
                            id="basic-url-material"
                        />
                        <MDBInputGroup
                            material
                            containerClassName="mb-3"
                            prepend="$"
                            append=".00"
                        />
                        <MDBInputGroup
                            material
                            className="mb-0"
                            prepend="With textarea"
                            type="textarea"
                        />
                    </MDBContainer>
                </MDBCol>
            </MDBRow>
        </React.Fragment>
    )
}

RestCreate.propTypes = {

}

export default RestCreate
