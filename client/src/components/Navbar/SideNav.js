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
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { toggleSideNav } from '../../redux/actions/navAction'
import { useStyles } from '../../Styles/Navbar'

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
                <div className="grey white-text h-100">
                    <ListItem
                        className="mt-1"
                        button
                        onClick={() => toggleSideNav()}>
                        <ListItemIcon>
                            <ChevronLeftIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Click Me!!
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <List>
                        <Link to="/restaurant">
                            <ListItem button>
                                <ListItemIcon className="">
                                    <RestaurantIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    <span style={{ fontFamily: "Saysettha OT" }}>
                                        ຮ້ານອາຫານ
                                    </span>
                                </ListItemText>
                            </ListItem>
                        </Link>

                        <ListItem button>
                            <ListItemIcon>
                                <RoomServiceIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <span style={{ fontFamily: "Saysettha OT" }}>
                                    ອາຫານ
                                </span>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <LocalOfferIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <span style={{ fontFamily: "Saysettha OT" }}>
                                    ໂປຣໂມຊັ່ນ
                                </span>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <SearchIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <span style={{ fontFamily: "Saysettha OT" }}>
                                    ຄົ້ນຫາ
                                </span>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <LocationOnIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <span style={{ fontFamily: "Saysettha OT" }}>
                                    ທີ່ຕັ້ງ
                                </span>
                            </ListItemText>
                        </ListItem>

                    </List>
                </div>

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
