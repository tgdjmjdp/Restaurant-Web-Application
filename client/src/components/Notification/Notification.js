import React from 'react'
import { MDBContainer } from "mdbreact";

const Notification = props => {
    return (
        <MDBContainer
            style={{
                width: "auto",
                position: "fixed",
                top: "10px",
                right: "10px",
                zIndex: 9999
            }}
        >
            {/* <MDBNotification
                show
                fade
                iconClassName="text-primary"
                title="Bootstrap"
                message="See? Just like this."
                text="just now"
            />
            <MDBNotification
                show
                fade
                iconClassName="text-primary"
                title="Bootstrap"
                message="Heads up, toasts will stack automatically"
                text="2 seconds ago"
            /> */}
        </MDBContainer>
    )
}

Notification.propTypes = {

}

export default Notification
