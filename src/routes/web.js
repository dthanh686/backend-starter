const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello World!fafaafafafafafafa");
});

router.get("/shiba", (req, res) => {
    res.render("views.ejs");
});

module.exports = router;