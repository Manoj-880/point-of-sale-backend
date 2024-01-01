const catagorieRepo = require("../Repos/catagoriesRepo");

const getAll = async (req, res) => {
  try {
    const catagories = await catagorieRepo.get();
    res.status(200).send({
      success: true,
      message: "catagories fetched successfully",
      data: catagories,
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
    const newData = await catagorieRepo.add(req.body);
    res.status(200).send({
      success: false,
      message: "catagorie added succesfully",
      data: newData,
    });
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
};
