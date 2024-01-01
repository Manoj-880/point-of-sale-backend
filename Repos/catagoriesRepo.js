const catagoriesModel = require('../Models/catagoriesModel');

const get = () => {
    return catagoriesModel.find();
};

const add = (data) => {
    const catagorie = new catagoriesModel(data);
    return catagorie.save();
};

module.exports = {
    get,
    add
};