
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

    if (!error){

        return res.status(400).json({ errors: errors.array() });
    
    }

    console.log('==============  REST ID ================');
    console.log(req.body.restID);
    console.log('====================================');    

    const rest_id = await RestModel.findOne({
        "_id": ObjectId(req.body.restID)
    })

    if (rest_id === null){
        return res.send( "ບໍ່ພົບຮ້ານອາຫານ" )
    }

    try {

        food = new FoodModel({
            name: req.body.foodName
        })

        res.send(req.body.restID)
        
    } catch (error) {
        
        console.log(error.message);
        res.status(500).send("ເກີດຂໍ້ຜິດພາດ");

    }

})

module.exports = router;