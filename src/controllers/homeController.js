
const connection = require('../config/database');


const getHomePage = (req, res) => {
    let users = [];
    connection.query(
        'select * from Users u',
        function (err, results, fields) {
            console.log("Users", users);
            users = results
            console.log('result>>', results);
            res.send(JSON.stringify(users));
        }
    )
}

const getABC = (req, res) => {
    res.send("ABC");
}

const getShiba = (req, res) => {
    res.render("views.ejs");
}

module.exports = {
    getHomePage,
    getABC,
    getShiba
}