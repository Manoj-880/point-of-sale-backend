const productModel = require('../Models/productModel');

const get = () => {
    return productModel.find();
};

const add = (data) => {
    const product = new productModel(data);
    return product.save();
};

const update = (id, data) => {
    return productModel.findOneAndUpdate({_id:id}, {$set:data});
};

const remove = (id) => {
    return productModel.findOneAndDelete({_id: id})
};

module.exports = {
    get,
    add,
    update,
    remove
}