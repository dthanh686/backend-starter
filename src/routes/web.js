const express = require('express')
const router = express.Router()
const { getHomePage, getABC, getShiba, getCreatePage, postCreateUser, getUpdatePage, postUpdateUser } = require('../controllers/homeController')

router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/shiba", getShiba);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);


router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);

module.exports = router;