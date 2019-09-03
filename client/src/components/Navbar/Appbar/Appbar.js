import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles, linkStyles, modalStyles } from '../../../Styles/Navbar'
import { connect } from 'react-redux'
import { openSideBar } from '../../../redux/actions/navAction'
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import LoginModal from '../../Form/Auth/Login'

const Appbar = ({
    openSideBar,
    navState: {
        sidebarOpen
    }
}) => {

    const classes = useStyles();
    const linkStyle = linkStyles();
    const modalStyle = modalStyles();

    const [modalOpen, setModal] = React.useState(false);

    const handleModalOpen = () => {
        setModal(true);
    }

    const handleModalClose = () => {
        setModal(false);
    }

    return (
        <div
            className={classes.navStay}
        >
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: sidebarOpen,
                })}
            >
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={() => openSideBar(sidebarOpen)}
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.title}>
                        <Link to="/"
                            className={linkStyle.buttonLink}>
                            <Typography
                                variant="h6"
                                color="inherit"
                            >
                                HOME PAGE
                        </Typography>
                        </Link>
                    </div>
                    {/* <Link
                        to="/login"
                        className={linkStyle.buttonLink}> */}
                    <Button
                        type="button"
                        /* href="/login" */
                        onClick={handleModalOpen}
                        style={{ textTransform: 'capitalize' }}
                        color="inherit"
                        variant="text">
                        <Typography
                            color="inherit"
                        >
                            Login
                            </Typography>
                    </Button>
                    {/* </Link> */}
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={modalStyle.modal}
                        open={modalOpen}
                        onClose={handleModalClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={modalOpen}>
                            <LoginModal />
                        </Fade>
                    </Modal>
                </Toolbar>
            </AppBar>
        </div>
    )
}

Appbar.propTypes = {
    navState: PropTypes.object.isRequired,
    openSideBar: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    navState: state.navReducer
})

export default connect(mapStateToProps, { openSideBar })(Appbar)
