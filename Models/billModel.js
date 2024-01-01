const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const billSchema = new Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "customers",
        required: true,
    },
    products: [
        {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "products",
            required: true,
        },
        quantity : {
            type : Number,
            required : true,
        }
        },
    ],
    total : {
        type : Number,
        required : true,
    },
    paymentStatus : {
        type : Boolean,
        default : false
    },
    amountPaid : {
        type : Number,
        default : 0
    }
});

module.exports = mongoose.model('bill', billSchema);
