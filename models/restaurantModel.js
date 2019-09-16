    
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    name: { 
        type: String,
        required: true
    }
})
    
module.exports = User = mongoose.model('restaurants', UserSchema);
