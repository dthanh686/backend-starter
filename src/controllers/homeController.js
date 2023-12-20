
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

    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city

    connection.query(
        `INSERT INTO Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city],
        function (err, results) {
            console.log(results);
            res.send('create user succeed !')
        }
    )
}


module.exports = {
    getHomePage,
    getABC,
    getShiba,
    postNewUser
}