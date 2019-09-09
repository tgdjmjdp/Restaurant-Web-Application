
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
    console.log("AUTH MIDDLE WARE");
    console.log(req.user.id);
    console.log('====================================');

    try {

        const user = await User.findById(req.user.id).select('-password');
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

        let user = await User.findOne({ "email": loginEmail });

        if (!user) {

            console.log('====================================');
            console.log('no user');
            console.log('====================================');

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
                console.log('====================================');
                console.log(err);
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

        user = new User({
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

        /* const payload = {
            user: {
                id: user.id
            }
        } */



        /* jwt.sign(payload, 'secret token', { expiresIn: 360000 }, (error, token) => {
            if (error) throw error;
            res.json({ token });
            console.log('====================================');
            console.log("token generated");
            console.log('====================================');
            console.log(token);
            console.log('====================================');
        }); */

    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }

})

module.exports = router;