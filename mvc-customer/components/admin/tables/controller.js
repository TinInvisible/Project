const service = require('./service');
const products_service = require('../../products/Service');
const { emailExists } = require('../auth/authRepository');
const qs = require('qs');

exports.tables = async (req, res) => {
    let admins = await service.getAll_admin();
    let customers = await service.getAll_customer();
    let products = await products_service.getAll();

    const {name_admin} = req.query;
    const {email_admin} = req.query;
    const {sort_admin} = req.query;
    const {name_customer} = req.query;
    const {email_customer} = req.query;
    const {sort_customer} = req.query;

    // filter
    const { category } = req.query;
    const { branding } = req.query;

    if(name_admin){
        admins = await service.getName(name_admin,'user_admin');
    }
    if(email_admin){
        admins = await service.getEmail(email_admin,'user_admin');
    }
    if(name_customer){
        customers = await service.getName(name_customer,'users');
    }
    if(email_customer){
        customers = await service.getEmail(email_customer,'users');
    }
    if(sort_admin == "asc_name"){
        admins = service.sort_asc(admins,'name');
    }
    else if(sort_admin == "dsc_name"){
        admins = service.sort_dsc(admins,'name');
    }
    else if(sort_admin == "asc_email"){
        admins = service.sort_asc(admins,'email');
    }
    else if(sort_admin == "dsc_email"){
        admins = service.sort_dsc(admins,'email');
    }
    if(sort_customer == "asc_name"){
        customers = service.sort_asc(customers,'name');
    }
    else if(sort_customer == "dsc_name"){
        customers = service.sort_dsc(customers,'name');
    }
    else if(sort_customer == "asc_email"){
        customers = service.sort_asc(customers,'email');
    }
    else if(sort_customer == "dsc_email"){
        customers = service.sort_dsc(customers,'email');
    }

    if (category) {
        products = await service.filter_category(category);
    }
    else if (branding) {
        products = await service.filter_branding(branding);
    }

    res.render('admin/tables', { admins, customers, products, layout:'layout_admin.hbs' })
}

exports.editProduct = async (req, res, next) => { 
    const { ProductID } = req.pagrams;

    const { edit_name } = req.body;
    const { edit_category } = req.body;
    const { edit_branding } = req.body;
    const { edit_status } = req.body;

    if (edit_name) {
        await service.edit_product_name(edit_name, ProductID);
    }
    else if (edit_category) {
        await service.edit_product_category(edit_category, ProductID);
    }
    else if (edit_branding) {
        await service.edit_product_branding(edit_branding, ProductID);
    }
    else if (edit_status) {
        await service.edit_product_status(edit_status, ProductID);
    }

    res.redirect('/admin/tables')
}

exports.getEditProduct = async (req, res) => {
    res.render('admin/edit-product');
}
