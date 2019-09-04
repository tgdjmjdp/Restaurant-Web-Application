import React from 'react'
import AppBarTop from './Appbar/Appbar'
import SideBar from './SideBar/SideBar'
import { useStyles } from '../../Styles/Navbar'

const Navbar = props => {

    const classes = useStyles();
    
    return (
        <React.Fragment>
            <div className={classes.root}>
                <AppBarTop />
                <SideBar />
            </div>
        </React.Fragment>
    )
}

export default Navbar
