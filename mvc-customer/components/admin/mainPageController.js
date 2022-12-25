const service = require('./Service');

exports.get_HomePage = (req,res) => {

    res.render('admin/home-page', {layout: 'layout_admin.hbs'});
}
exports.get_Pages = (req,res) => {
    //res.render('products/list');
    res.render('admin/' + req.params.slug,{layout: 'layout_admin.hbs'});
}
exports.get_Page = (req, res) => {
    const pages = req.params.page;
    const page = service.getByPage(pages);
    res.render('admin/' + pages, page); 
}
