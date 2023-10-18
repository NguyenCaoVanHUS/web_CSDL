let getWebgisPage = (req, res) => {
    return res.render("webgispage.ejs", {
        title: 'Bản đồ',
        user: req.user
    })
};

module.exports = {
    getWebgisPage: getWebgisPage
};
