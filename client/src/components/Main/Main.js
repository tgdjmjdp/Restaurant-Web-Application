import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Container from '@material-ui/core/Container';

const Main = () => {

    return (
        <React.Fragment>            
            <Container component="main" maxWidth="md">
                

            </Container>
        </React.Fragment>
    )
}

Main.propTypes = {
    navState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer
})

export default connect(mapStateToProps, {})(Main)
