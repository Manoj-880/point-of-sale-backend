const customerRepo = require('../Repos/customerRepo');

const getAll = async (req, res) => {
    try {
        const customer = await customerRepo.get();
        res.status(200).send({
            success : true,
            message : 'Customers fetched successfully',
            data : customer,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success : false,
            message : 'Internal server error'
        });
    }
};

const create = async (req, res) => {
    try {
        const newData = await customerRepo.add(req.body);
        res.status(200).send({
            success: true,
            message: 'customer added successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
        });
    }
};

const update = async (req, res) => {
    try {
        const updateData = await customerRepo.update(req.params.id, req.body);
        res.status(200).send({
            success: true, 
            message: 'customer updated successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
        });
    }
}

module.exports = {
    getAll,
    create,
    update
}