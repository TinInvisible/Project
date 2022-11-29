exports.get_HomePage = (req,res) => {
    res.render('products/home-page');
}
exports.get_Pages = (req,res) => {
    //res.render('products/list');
    res.render('products/' + req.params.slug);
}

