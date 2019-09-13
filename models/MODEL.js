/* 
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    RESTAURANT: {
        name: {},
        branch: {},
        contact: {
            email: {},
            tel: [],
            whatsapp: [],
            facebook: {},
            Instagram: {},
            Twitter: {},
            WeChat: {},
            Line: {}

        },
        type: {
            bussiness: {}, //ປະເພດທຸລະກິດ
            service: {}, //ປະເພດການບໍລິການ
        },
        openClose: {
            day: {},
            open: {},
            close: {}
        },
        table: {
            name: {},
            closeTo: {},
            type: {}
        },
        food: { ID },
        review: [{
            reviewer: { USER },
            Score: {
                food: {},
                vibe: {},
                service: {},
                total: {}
            },
            detail: {}
        }],
        address: {
            province: {},
            district: {},
            village: {},
            alley: {},
            place: {},
            closeTo: {},
            map: {},
            descption: {}
        },
        owner: [{ USER }],
        stuff: [{ USER }],
        feature: {
            kidPlayGround: {},
            petAllow: {},
            smoking: {},
            toddlerSeat: {},
            disabledConvenient: {},
            alcohol: {},
            event: {},

        }
    },
    USER: {
        name: {},
        birth: {},
        email: {},
        password: {},
        avatar: {},
        type: {},
        contact: {
            facebook: {},
            tel: [{}],
            whatsapp: {},
            wechat: {},
            Instagram: {},
            line: {},
        },
        address: {
            province: {},
            district: {},
            village: {},
            alley: {},
        }
    }
    
    )

module.exports = User = mongoose.model('users', UserSchema); */