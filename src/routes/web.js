const express = require('express')
const router = express.Router()
const { getHomePage, getABC, getShiba, postNewUser } = require('../controllers/homeController')

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/shiba", getShiba);
router.post("/create-user", postNewUser);

module.exports = router;