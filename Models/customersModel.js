const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customersSchema = new Schema({
    customerName : {
        type : String,
        required : true,
    },
    mobileNumber : {
        type : Number,
        required : true,
    },
    balance : {
        type : Number,
        default : 0
    }
});

module.exports = mongoose.model('customers', customersSchema);