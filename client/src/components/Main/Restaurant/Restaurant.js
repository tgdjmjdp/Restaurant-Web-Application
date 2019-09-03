import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import clsx from 'clsx';
import { useStyles } from '../../../Styles/Navbar'
import Typography from '@material-ui/core/Typography';

const Restaurant = ({
    navState: {
        sidebarOpen
    }
}) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <main
                style={{ marginTop: '50px' }}
                className={clsx(classes.content, {
                    [classes.contentShift]: sidebarOpen,
                })} >
                <div >
                    <Typography paragraph>
                      xxxxxxxxx  Tsadada asdadadasada asdasdasdadd asda asd asd asd adsa daurant
                    </Typography>
                </div>
            </main>

        </React.Fragment>
    )
}

Restaurant.propTypes = {
    navState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer
})

export default connect(mapStateToProps, {})(Restaurant)
