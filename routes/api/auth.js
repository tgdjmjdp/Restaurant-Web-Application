
const express = require('express');
const router = express.Router();
const UserModel = require('../../models/userModel');
const AuthMiddleware = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

router.get('/', AuthMiddleware, async (req, res) => {


    console.log('====================================');
    console.log(req.user.id);
    console.log('====================================');

    try {

        const user = await UserModel.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }

});

router.post('/', [

    check('loginEmail', 'Please include a valid email').isEmail(),
    check('loginPassword', 'Password is required').exists()

], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { loginEmail, loginPassword } = req.body;

    try {

        let user = await UserModel.findOne({ "email": loginEmail });

        if (!user) {

            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }

        const isMatch = await bcrypt.compare(loginPassword, user.password);

        if (!isMatch) {

            console.log('====================================');
            console.log('password not match');
            console.log('====================================');
            return res
                .status(400)
                .json({ errors: [{ msg: 'Invalid Credentials' }] });

        }

        const payload = {
            user: {
                id: user._id
            }
        };

        jwt.sign(
            payload,
            config.get('jwtToken'),
            { expiresIn: 360000 },
            (err, token) => {
                console.log('============== TOKEN ====================');
                console.log(token);
                console.log('====================================');
                res.json({ token });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/register', [

    check('regUsername', 'name is required').not().isEmpty(),
    check('regEmail', "please include a valid email").isEmail(),
    check('regPassword', 'password must contain atleast 6 or more charaters').isLength({ min: 6 })

], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        regUsername,
        regEmail,
        regPassword
    } = req.body

    try {

        let user = await UserModel.findOne({ "name": regUsername });

        if (user) {

            console.log('====================================');
            console.log("user exists");
            console.log('====================================');

            return res.status(400).json({
                errors: [{
                    msg: 'User exists'
                }]
            });

        }

        const avatar = gravatar.url(regEmail, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        user = new UserModel({
            name: regUsername,
            email: regEmail,
            password: regPassword,
            avatar
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(regPassword, salt);

        console.log(user);

        const createUser = await user.save();

        if (createUser) {
            console.log('====================================');
            console.log("user " + user.name + " is created");
            console.log('====================================');
        }

        res.json({ user });

    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }

})

router.post('/changepassword', [AuthMiddleware, [

    check('userPassword', 'ລະຫັດຜ່ານຕ້ອງຫຼາຍກວ່າ 8 ໂຕອັກສອນ').isLength({ min: 8 })

]], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() });

    }

    try {

        const salt = await bcrypt.genSalt(10)

        newPassword = await bcrypt.hash(req.body.userPassword, salt)

        const filter = { _id: req.user.id };

        const update = { password: newPassword };

        const user = await UserModel.findByIdAndUpdate(filter, update);

        res.json({
            user
        })

    } catch (error) {

        res.send(error.array())

    }

})

router.post('/changename', [AuthMiddleware, [

    check('userName', 'ກະລຸນາປ້ອນຊື່ຜູ້ໃຊ້ງານ').not().isEmpty(),

]], async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(400).json({ errors: errors.array() });

    }

    try {

        const filter = { _id: req.user.id };

        const update = { name: req.body.userName };

        await UserModel.findByIdAndUpdate(filter, update);

        res.send("ປ່ຽນຊື່ສຳເລັດ");

    } catch (error) {

        res.send(error.message)

    }

})

router.post('/useraddress', AuthMiddleware, async (req, res) => {

    try {

        const {
            province,
            district,
            village
        } = req.body

        const filter = { _id: req.user.id };

        const update = {
            address: {
                province,
                district,
                village
            }
        };

        await UserModel.findByIdAndUpdate(filter, update);

        res.send("ແກ້ໄຂທີ່ຢູ່ສຳເລັດ")

    } catch (error) {

        res.send(error.message)

    }
})

module.exports = router;