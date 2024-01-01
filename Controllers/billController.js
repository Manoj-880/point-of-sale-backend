const billRepo = require('../Repos/billsRepo');

const getAll = async (req, res) => {
    try {
        const allBills = await billRepo.get();
        res.status(200).send({
            success: true,
            message: 'Bills fetched successfully',
            data: allBills,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
        })
    }
};

const add = async (req, res) => {
    try {
        const {customerId, products, total, paymentStatus, amountPaid } = req.body;
        const newBill = await billRepo.add({
            customerId : customerId,
            products : products.map(product => ({
                productId : product.productId,
                quantity : product.quantity,
            })),
            total : total,
            paymentStatus : paymentStatus,
            amountPaid : amountPaid
        });
        res.status(200).send({
            success: true,
            message: 'Bill added successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Internal server error',
        })
    }
};

const getByCustId = async (req, res) => {
    try {
        const id = req.params.id;
        const bills = await billRepo.getByCusId(id);
        res.status(200).send({
            success: true,
            message: 'customer bills fetched successfully',
            data: bills
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message : 'Internal server error',
        })
    }
}

module.exports = {
    getAll,
    add,
    getByCustId
}