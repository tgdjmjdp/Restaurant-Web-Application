
const express = require('express');
const router = express.Router();
const RestModel = require('../../models/restaurantModel');
const UserModel = require('../../models/userModel');
const AuthMiddleware = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');

router.post('/create', [AuthMiddleware, [

    check('restName', 'ກະລຸນາປ້ອນຊື່ຮ້ານອາຫານ').not().isEmpty(),

]] , async (req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {
        restName
    } = req.body

    try {

        const restData = {};

        rest = new RestModel({
            owner: req.user.id,
            name: restName
        })

        const isCreated = await rest.save();
        
        res.send(rest)

    } catch (error) {
        console.log(error.message);
        res.status(500).send("ເກີດຂໍ້ຜິດພາດ");
    }

})

router.get('/:rest_id', async (req, res) => {

    try {

        const restData = await RestModel.findById(req.params.rest_id);

        res.json(restData);

    } catch (error) {

        console.log(error.message);

        res.status(500).send(error.message);

    }

});

router.post('/my', AuthMiddleware, async (req, res) => {

    try {

        const rests = await RestModel.find({"owner": req.user.id})
        
        res.json(rests);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;