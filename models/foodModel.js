    
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'restaurants',
        required: true
    },
    name: { 
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})
    
module.exports = User = mongoose.model('foods', UserSchema);
