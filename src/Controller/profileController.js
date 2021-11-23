const { getAllModelsDetailsWithoutFilter, getAllModelsWithoutFilter } = require("../model.js/profileModel");

exports.getAllModelsDetails = async (req, res) => {
  try {
    const models = await getAllModelsDetailsWithoutFilter();
    res.send({ profiles:models  });
  } catch (error) {
      console.log(error)
  }
};

exports.getAllModels = async (req, res) => {
  try {
    const models = await getAllModelsWithoutFilter();
    res.send({ profiles:models  });
  } catch (error) {
      console.log(error)
  }
};
