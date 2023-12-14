
const connection = require('../config/database');


const getHomePage = (req, res) => {

    return res.render('home.ejs')
}

const getABC = (req, res) => {
    res.send("ABC");
}

const getShiba = (req, res) => {
    res.render("views.ejs");
}

const postNewUser = (req, res) => {
    console.log(req.body);
    res.send("create new user");
}


module.exports = {
    getHomePage,
    getABC,
    getShiba,
    postNewUser
}