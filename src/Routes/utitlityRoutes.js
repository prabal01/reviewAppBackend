const express = require('express');
const router = express.Router();
const { populateDB } = require('../utilities/commontUtility');

router.post('/populateDB',populateDB)


module.exports = router;