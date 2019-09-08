import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { useStyles } from '../../../Styles/Navbar'
import { connect } from 'react-redux'
import { toggleSideNav } from '../../../redux/actions/navAction'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import {
    MDBIcon
} from "mdbreact";

const SideBar = ({
    toggleSideNav,
    navState: {
        sideNav
    }
}) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={sideNav}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Divider />
                <Link to="/restaurant">
                    <ListItem
                        button
                        onClick={() => toggleSideNav()}>
                        <ListItemIcon>
                            <MDBIcon icon="angle-left" />
                        </ListItemIcon>
                        <ListItemText>
                            Click Me
                        </ListItemText>
                    </ListItem>
                </Link>
            </Drawer>
        </React.Fragment>
    )
}

SideBar.propTypes = {
    navState: PropTypes.object.isRequired,
    toggleSideNav: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer
})

export default connect(mapStateToProps, { toggleSideNav })(SideBar)
