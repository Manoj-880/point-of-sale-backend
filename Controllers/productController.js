const productRepo = require('../Repos/productsRepo');

const getAll = async (req, res) => {
    try {
        const product = await productRepo.get().populate('catagorieID', 'catagorieName');
        res.status(200).send({
            success: true,
            message: "Products fetched successfully",
            data: product,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
        });
    }
};

const create = async (req, res) => {
    try {
        const newData = await productRepo.add(req.body);
        res.status(200).send({
            success: true,
            message: 'Product added successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
        });
    };
};

const update = async (req, res) => {
    try {
        const updateData = req.body;
        const id = req.params.id;
        const newData = await productRepo.update(id, updateData);
        res.status(200).send({
            success: 200,
            message: 'product updated successfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
        });
    };
};

const remove = async (req, res) => {
    try {
        const del = await productRepo.remove(req.params.id);
        res.status(200).send({
            success: true,
            message: 'Product deleted successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
        });
    }
};

module.exports = {
    getAll,
    create,
    remove,
    update
}