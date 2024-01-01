    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const productSchema = new Schema({
        productName : {
            type : String,
            required : true,
        },
        catagorieID : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'categories',
            required : true,
        },
        price : {
            type : Number,
            required : true,
        },
        inventory : {
            type : Number,
        }
    });

    module.exports = mongoose.model('products', productSchema);