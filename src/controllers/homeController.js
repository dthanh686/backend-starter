const getHomePage = (req, res) => {
    res.send("Hello World!fafaafafafafafafa");
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