const express = require('express')
const router = express.Router()
const { getHomePage, getABC, getShiba } = require('../controllers/homeController')

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/shiba", getShiba);

module.exports = router;