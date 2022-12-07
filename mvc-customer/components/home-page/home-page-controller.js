exports.link_to = (req,res) => {
    res.render('products/' + req.params.slug);
}
exports.getHomePage = (req,res) => {
    res.render('products/home-page');
}