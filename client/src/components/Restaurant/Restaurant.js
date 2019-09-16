import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MDBContainer, MDBView, MDBMask } from 'mdbreact'

// functions

import { getRestById, clearRestState } from '../../redux/actions/restAction'
import { fontStyle } from '../../Styles/font'

// components



const Restaurant = ({
    getRestById,
    match,
    restState: {
        restData
    }
}) => {

    const classes = fontStyle();

    React.useEffect(() => {
        getRestById(match.params.rest_id);
    }, [getRestById]);

    return (

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
                <h4>
                    asdas
                </h4>
            )

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