const express = require('express');
// const { requireSignIn } = require('../common-middleware');
const { signup,signIn } = require('../Controller/user');
// const { isReqValidated, validateSignupRequest } = require('../validator/auth')
const router = express.Router();
const model = require("../model.js/userModel")

router.post('/signup',signup)
router.post('/login',signIn)


module.exports = router;