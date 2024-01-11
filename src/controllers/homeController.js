const connection = require('../config/database');
const { getAllUsers, getUserById } = require('../services/CRUDServices');


const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results })
}

const getABC = (req, res) => {
    res.send("ABC");
}

const getShiba = (req, res) => {
    res.render("views.ejs");
}

const postCreateUser = async (req, res) => {
    console.log(req.body);

    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city


    let [results, fields] = await connection.query(
        `INSERT INTO 
        Users (email, name, city)
        VALUES (?, ?, ?)`,
        [email, name, city]
    );
    console.log("check results =>", results);

    res.send('create user succeed !')
}

const getCreatePage = (req, res) => {
    res.render("create.ejs")
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id
    let user = await getUserById(userId)
    res.render("edit.ejs", { userEdit: user })
}


module.exports = {
    getHomePage,
    getABC,
    getShiba,
    postCreateUser,
    getCreatePage,
    getUpdatePage
}