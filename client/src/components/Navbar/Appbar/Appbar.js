import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles, linkStyles } from '../../../Styles/Navbar'
import { connect } from 'react-redux'
import { openSideBar } from '../../../redux/actions/navAction'
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBInput,
    MDBIcon,
} from "mdbreact";

// Components

import RegisterModalForm from '../../Form/Auth/Registeration'

const Appbar = ({
    openSideBar,
    navState: {
        sidebarOpen
    }
}) => {

    const classes = useStyles();
    const linkStyle = linkStyles();

    const [modalOpen, setModal] = React.useState(false);
    const [modalLogin, setModalLogin] = React.useState(true);
    const [modalRegister, setModalRegister] = React.useState(false);

    const handleModalOpen = () => {
        setModal(!modalOpen);
    }

    const handleModalAuth = () => {
        setModalLogin(!modalLogin);
        setModalRegister(!modalRegister);
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
                    <Button
                        type="button"
                        onClick={handleModalOpen}
                        style={{ textTransform: 'capitalize' }}
                        color="inherit"
                        variant="text">
                        <Typography
                            color="inherit"
                        >
                            ເຂົ້າສູ່ລະບົບ
                            </Typography>
                    </Button>
                    <MDBModal isOpen={modalOpen} toggle={() => setModal(!modalOpen)}>
                        {
                            modalLogin ? (
                                <div className="animated fadeIn">
                                    <MDBModalHeader
                                        className="text-center border-bottom-0"
                                        titleClass="w-100 font-weight-bold"
                                        toggle={() => setModal(!modalOpen)}
                                    >
                                        <div className="pt-3">
                                            <Avatar style={{ margin: 'auto' }} className={classes.avatar}>
                                                <LockOutlinedIcon />
                                            </Avatar>
                                        </div>
                                        <Typography
                                            className="my-3"
                                            color="primary"
                                            component="h1"
                                            variant="h5">
                                            ເຂົ້າສູ່ລະບົບ
                                        </Typography>
                                    </MDBModalHeader>
                                    <MDBModalBody>
                                        <form className="mx-3 grey-text">
                                            <MDBInput
                                                label="ປ້ອນອີເມວ"
                                                icon="envelope"
                                                group
                                                type="email"
                                                validate
                                                error="wrong"
                                                name="email"
                                                success="right"
                                            />
                                            <MDBInput
                                                label="ປ້ອນລະຫັດຜ່ານ"
                                                icon="lock"
                                                group
                                                type="password"
                                                validate
                                            />
                                            <div className="text-primary mx-0 my-3 overflow-hidden">
                                                <Link
                                                    className="float-left"
                                                    onClick={() => setModal(!modalOpen)}
                                                    to="/reset-password">
                                                    <Typography>
                                                        ລືມລະຫັດຜ່ານ ?
                                                </Typography>
                                                </Link>
                                            </div>
                                            <div className="d-flex justify-content-between flex-wrap">
                                                <div>
                                                    <MDBBtn
                                                        className="m-0"
                                                        onClick={() => setModal(!modalOpen)}>
                                                        <Typography>
                                                            ເຂົ້າສູ່ລະບົບ
                                                    </Typography>
                                                    </MDBBtn>
                                                </div>
                                                <div>
                                                    <MDBBtn
                                                        className="m-0"
                                                        onClick={() => handleModalAuth()}>
                                                        <Typography>
                                                            ຍັງບໍ່ມີບັນຊີ ?
                                                    </Typography>
                                                    </MDBBtn>
                                                </div>
                                            </div>
                                        </form>
                                    </MDBModalBody>
                                </div>
                            ) : (
                                    <div>
                                        <MDBModalHeader
                                            className="text-center animated fadeIn border-bottom-0"
                                            titleClass="w-100 font-weight-bold"
                                            toggle={() => setModal(!modalOpen)}
                                        >
                                            <div className="overflow-hidden">
                                                <MDBBtn
                                                    onClick={() => handleModalAuth()}
                                                    className="float-left mx-2">
                                                    <MDBIcon icon="chevron-left" />
                                                </MDBBtn>
                                            </div>
                                            <div className="pt-3">
                                                <Avatar style={{ margin: 'auto' }} className={classes.avatar}>
                                                    <LockOutlinedIcon />
                                                </Avatar>
                                            </div>
                                            <Typography
                                                className="my-3"
                                                color="primary"
                                                component="h1"
                                                variant="h5">
                                                ລົງທະບຽນສະມາຊິກ
                                            </Typography>
                                        </MDBModalHeader>
                                        <RegisterModalForm />
                                    </div>
                                )
                        }
                    </MDBModal>
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
