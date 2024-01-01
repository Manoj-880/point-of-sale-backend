const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catagorieSchema = new Schema({
    catagorieName : {
        type : String,
        required : true,
    }
});

module.exports = mongoose.model('categories', catagorieSchema);