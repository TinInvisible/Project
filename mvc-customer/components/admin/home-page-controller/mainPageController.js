const service = require('./Service');

exports.get_HomePage = (req,res) => {

    res.render('admin/home-page', {layout: 'layout_admin.hbs'});
}
exports.get_Pages = (req,res) => {
    //res.render('products/list');
    res.render('admin/' + req.params.slug,{layout: 'layout_admin.hbs'});
}
exports.getProFile = async (req, res, next) => {
    const { id } = req.params;
    const user = await service.getID(id);
    if (!user) return next(createError(404));
    res.render('admin/profile', { user, layout:'layout_admin.hbs' });
}

exports.editProfile = async (req, res, next) => {
    const { id } = req.params;
    const { name } = req.body;
    // const { age } = req.body;
    // const { gender } = req.body;
    if(name){
        await service.change_name(name,id);
    }
    // else if(age){
    //     await service.change_age(age,id);
    // }
    // else if(gender){
    //     await service.change_gender(gender,id);
    // }
  
    const user = await service.getID(id);
    if (!user) return next(createError(404));
    res.render('admin/profile', { user,layout:'layout_admin.hbs' });
}

exports.addProduct = async (req, res, next) => {
    const { name } = req.body;
    const { price } = req.body;
    const { shortDes } = req.body;
    const { longDes } = req.body;
    const { category } = req.body;
    const { branding } = req.body;
    const { quantity } = req.body;

    await service.addProduct(name, price, shortDes, longDes, category, branding, quantity);
    res.redirect('/admin/tables');
}