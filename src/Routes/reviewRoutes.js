const express = require('express');
const { saveReviewController, getReviewsController } = require('../Controller/reviewController');
const { saveReview } = require('../model.js/reviewModel');
const router = express.Router()


router.post('/postReview',saveReviewController)
router.get('/getReviews',getReviewsController)

module.exports = router