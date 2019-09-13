import React from 'react'
import AppBarTop from './Appbar/Appbar'
import SideNav from './Appbar/SideNav'
import { useStyles } from '../../Styles/Navbar'

const Navbar = props => {

    const classes = useStyles();
    
    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBarTop />
                <SideNav />
            </div>
        </React.Fragment>
    )
}

export default Navbar
