import React from 'react'
import PropTypes from 'prop-types'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { useStyles } from '../../../Styles/Navbar'
import { connect } from 'react-redux'
import { openSideBar } from '../../../redux/actions/navAction'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import {
    MDBIcon
} from "mdbreact";

const SideBar = ({
    openSideBar,
    sidebarState: {
        sidebarOpen
    }
}) => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={sidebarOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Divider />
                <Link to="/restaurant">
                    <ListItem button>
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
    openSideBar: PropTypes.func.isRequired,
    sidebarState: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    sidebarState: state.navReducer
})

export default connect(mapStateToProps, { openSideBar })(SideBar)
