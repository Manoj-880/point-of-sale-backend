const customerModel = require('../Models/customersModel');

const get = () => {
    return customerModel.find();
};

const add = (data) => {
    const customer = new customerModel(data);
    return customer.save();
};

const update = (id, data) => {
    return customerModel.findOneAndUpdate({_id:id}, {$set:data});
};

module.exports = {
    get,
    add,
    update
}