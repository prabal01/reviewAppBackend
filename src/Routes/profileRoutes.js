const express = require('express');
const { getAllModelsDetails, getAllModels } = require('../Controller/profileController');
const router = express.Router();

router.get('/getAllModelsDetails',getAllModelsDetails)
router.get('/getAllModels',getAllModels)


module.exports = router;