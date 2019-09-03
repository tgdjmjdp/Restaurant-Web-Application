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
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {
    MDBContainer,
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBInput,
    MDBIcon,
    MDBRow,
    MDBCol
} from "mdbreact";

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
    const [modalLogin, setModalLogin] = React.useState(true);
    const [modalRegister, setModalRegister] = React.useState(false);
    const [modalAnimation, setModalAnimation] = React.useState(false);

    const handleModalOpen = () => {
        setModal(true);
    }

    const handleModalClose = () => {
        setModal(false);
    }

    const handleModalLogin = () => {
        setModalLogin(true);
        setModalRegister(false);
    }

    const handleModalRegister = () => {
        setModalLogin(false);
        setModalRegister(true);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        e.target.className += " was-validated";
    }

    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: '',
        conpassword: ''
    });

    const { name, email, password, conpassword } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

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
                    {/* <Modal
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
                    </Modal> */}
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
                        /* href="/login" */
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
                                                        onClick={() => handleModalRegister()}>
                                                        <Typography>
                                                            ຍັງບໍ່ມີບັນຊີ ?
                                                    </Typography>
                                                    </MDBBtn>
                                                </div>
                                            </div>
                                        </form>
                                    </MDBModalBody>
                                    {/* <MDBModalFooter className="d-block ">

                                    </MDBModalFooter> */}
                                </div>
                            ) : (
                                    <div >
                                        <MDBModalHeader
                                            className="text-center animated fadeIn border-bottom-0"
                                            titleClass="w-100 font-weight-bold"
                                            toggle={() => setModal(!modalOpen)}
                                        >
                                            <div className="overflow-hidden">
                                                <MDBBtn
                                                    onClick={() => handleModalLogin()}
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
                                        <MDBModalBody className="animated fadeIn">
                                            <form
                                                onSubmit={(e) => submitHandler(e)}
                                                noValidate
                                                className="mx-3 grey-text mb-2 needs-validation"
                                            >
                                                <MDBCol>
                                                    <MDBInput
                                                        label="ປ້ອນຊື່"
                                                        icon="user"
                                                        group
                                                        type="text"
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        required
                                                        name="name"
                                                        value={name}
                                                        onChange={e => onChange(e)}
                                                    >
                                                        <div className="invalid-feedback">
                                                            ກະລຸນາປ້ອນຊື່
                                                        </div>
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </MDBInput>

                                                </MDBCol>
                                                <MDBCol>
                                                    <MDBInput
                                                        label="ປ້ອນອີເມວ"
                                                        icon="envelope"
                                                        group
                                                        type="email"
                                                        validate
                                                        error="wrong"
                                                        success="right"
                                                        required
                                                        name="email"
                                                        value={email}
                                                        onChange={e => onChange(e)}
                                                    >
                                                        <div className="invalid-feedback">
                                                            ກະລຸນາປ້ອນອີເມວໃຫ້ຖືກຮູບແບບ <br /> ຕົວຢ່າງ: "example@email.com"
                                                        </div>
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </MDBInput>

                                                </MDBCol>
                                                <MDBCol>
                                                    <MDBInput
                                                        label="ປ້ອນລະຫັດຜ່ານ"
                                                        icon="lock"
                                                        group
                                                        type="password"
                                                        validate
                                                        required
                                                        name="password"
                                                        value={password}
                                                        onChange={e => onChange(e)}
                                                    >
                                                        <div className="invalid-feedback">
                                                            ລະຫັດຜ່ານຕ້ອງຫຼາຍກວ່າ 8 ໂຕຂື້ນໄປ
                                                        </div>
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </MDBInput>
                                                </MDBCol>
                                                <MDBCol>
                                                    <MDBInput
                                                        label="ປ້ອນລະຫັດຜ່ານອີກຄັ້ງ"
                                                        icon="exclamation-triangle"
                                                        group type="password"
                                                        required
                                                        validate
                                                        name="conpassword"
                                                        value={conpassword}
                                                        onChange={e => onChange(e)}
                                                    >
                                                        <div className="invalid-feedback">
                                                            ລະຫັດຜ່ານຕ້ອງຫຼາຍກວ່າ 8 ໂຕຂື້ນໄປ
                                                        </div>
                                                        <div className="valid-feedback">Looks good!</div>
                                                    </MDBInput>
                                                </MDBCol>



                                                {/* <div className="text-primary mx-0 my-3 overflow-hidden">
                                                    <Link
                                                        className="float-left"
                                                        onClick={() => setModal(!modalOpen)}
                                                        to="/reset-password">
                                                        <Typography>
                                                            ລືມລະຫັດຜ່ານ ?
                                                        </Typography>
                                                    </Link>
                                                </div> */}

                                                <div className="d-flex justify-content-between flex-wrap">
                                                    <div>
                                                        <MDBBtn
                                                            type="submit"
                                                            className="m-0"
                                                        /* onClick={() => setModal(!modalOpen)} */
                                                        /* onClick={() => handleModalLogin()} */
                                                        >
                                                            <Typography>
                                                                ລົງທະບຽນ
                                                            </Typography>
                                                        </MDBBtn>
                                                    </div>
                                                </div>
                                            </form>
                                        </MDBModalBody>
                                        {/* <MDBModalFooter className="d-block animated fadeIn">
                                            
                                        </MDBModalFooter> */}
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
