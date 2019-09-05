    
const express = require('express');
const router = express.Router();
const UserModel = require('../../models/userModel');
const AuthMiddleware = require('../../middleware/auth');

router.get('/', AuthMiddleware, async (req, res) => {

    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }

});