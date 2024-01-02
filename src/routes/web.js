const express = require('express')
const router = express.Router()
const { getHomePage, getABC, getShiba, postNewUser, getCreatePage, postCreateUser } = require('../controllers/homeController')

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/shiba", getShiba);

router.get("/create", getCreatePage);


router.post("/create-user", postCreateUser);

module.exports = router;