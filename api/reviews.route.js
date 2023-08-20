const express = require("express");

const ReviewsController = require("./reviews.controller.js")

const router = express.Router()

router.route("/movie/:id").get(ReviewsController.apiGetReviews)
router.route("/new").post(ReviewsController.apiPostReview)
router.route("/:id")
    .get(ReviewsController.apiGetReview)
    .put(ReviewsController.apiUpdateReview)
    .delete(ReviewsController.apiDeleteReview)

module.exports = router;