const billsModel = require('../Models/billModel');

const get = () => {
    return billsModel.find();
};

const add = (data) => {
    const bill = new billsModel(data);
    return bill.save();
};

const getByCusId = (id) => {
    return billsModel.find({customerId : id});
}

module.exports = {
    get,
    add,
    getByCusId
}