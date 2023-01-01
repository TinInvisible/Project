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

exports.manageProduct = async (req, res) => {
    const { name_add } = req.body;
    const { price } = req.body;
    const { shortDes } = req.body;
    const { longDes } = req.body;
    const { category_add } = req.body;
    const { branding_add } = req.body;
    const { quantity } = req.body;

    const { name_delete } = req.body
    const { category_delete } = req.body
    const { branding_delete } = req.body

    if (name_add && price && shortDes && longDes && category_add && branding_add && quantity) {
        await service.addProduct(name_add, price, shortDes, longDes, category_add, branding_add, quantity);
    }

    if (name_delete && category_delete && branding_delete) {
        await service.deleteProduct(name_delete, category_delete, branding_delete);
    }
    res.redirect('/admin/tables');
}