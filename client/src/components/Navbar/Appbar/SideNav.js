import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import {
    MDBIcon
} from "mdbreact";

import { toggleSideNav } from '../../../redux/actions/navAction'
import { useStyles } from '../../../Styles/Navbar'

const SideNav = ({
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
                <List>
                    <ListItem
                        button
                        onClick={() => toggleSideNav()}>
                        <ListItemIcon>
                            <MDBIcon icon="angle-left" />
                        </ListItemIcon>
                        <ListItemText>
                            Click Me!!
                        </ListItemText>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button>
                    <ListItemIcon>
asd
                    </ListItemIcon>
                    <ListItemText>
                        sadad
                    </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    )
}

SideNav.propTypes = {
    navState: PropTypes.object.isRequired,
    toggleSideNav: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer
})

export default connect(mapStateToProps, {
    toggleSideNav
})(SideNav)
