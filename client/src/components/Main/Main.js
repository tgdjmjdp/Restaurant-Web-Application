import React from 'react'
import clsx from 'clsx';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useStyles } from '../../Styles/Navbar'
import Container from '@material-ui/core/Container';
import Nav from '../Navbar/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Rest from './Restaurant/Restaurant'

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
