
const express = require('express');
const router = express.Router();
const FoodModel = require('../../models/foodModel');
const RestModel = require('../../models/restaurantModel');
const AuthMiddleware = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

router.post('/add', [

    check('foodName', 'ກະລຸນາປ້ອນຊື່ອາຫານ').not().isEmpty(),
    check('restID', 'ບໍ່ພົບຮ້ານອາຫານ').not().isEmpty(),

], async (req, res) => {

    const error = validationResult(req)

    if (!error) {

        return res.status(400).json({ errors: errors.array() });

    }

    const rest_id = await RestModel.findOne({
        _id: req.body.restID
    })

    if (rest_id === null) {
        return res.send("ບໍ່ພົບຮ້ານອາຫານ")
    }

    try {

        const food = await new FoodModel({
            owner: rest_id._id,
            name: req.body.foodName,
            price: req.body.foodPrice,
            type: req.body.foodType
        })

        const isAdded = await food.save();

        if (isAdded) {
            return res.send("ເພີ່ມອາຫານສຳເລັດ")
        }

    } catch (error) {

        console.log(error.message);
        res.status(500).send("ເກີດຂໍ້ຜິດພາດ");

    }

})

router.post('/load', [

    check('restID', 'ບໍ່ພົບຮ້ານອາຫານ').not().isEmpty(),

], async (req, res) => {

    const error = validationResult(req)

    if (!error) {

        return res.status(400).json({ errors: errors.array() });

    }

    const rest_id = await RestModel.findOne({
        _id: req.body.restID
    })

    if (rest_id === null) {
        return res.send("ບໍ່ພົບຮ້ານອາຫານ")
    }

    try {

       const food = await FoodModel.find({ owner : req.body.restID})

        if (food) {
            return res.send(food)
        }

    } catch (error) {

        console.log(error.message);
        res.status(500).send(error.message);

    }

})

module.exports = router;