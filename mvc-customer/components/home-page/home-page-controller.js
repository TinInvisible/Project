const service = require('./home-page-service');
const cart_service = require('../cart/cartService')
const createError = require('http-errors');
const product_service = require('../products/Service');
const qs = require('qs');
const { render } = require('node-sass');
exports.link_to = (req, res) => {
    res.render('products/' + req.params.slug);
}
exports.getHomePage = (req, res) => {
    res.render('products/home-page');
}
exports.getCheckOut = (req, res) => {
    if (!req.session.cart) {
        res.redirect('/home-page/shop/shopping-cart');
    }
    res.render('products/checkout');
}
exports.getProFile = async (req, res, next) => {
    const { id } = req.user;
    const user = await service.getID(id);
    if (!user) return next(createError(404));
    res.render('products/profile', { user });
}

exports.editProfile = async (req, res, next) => {
    const { id } = req.user;
    const { name } = req.body;
    const { age } = req.body;
    const { gender } = req.body;
    const { img } = req.body;
  
    if (id) {
        if (name) {
            await service.change_name(name, id);
        }
        else if (age) {
            await service.change_age(age, id);
        }
        else if (gender) {
            await service.change_gender(gender, id);
        }
    }
    res.redirect('/home-page/profile');
}

exports.insertShippingDetail = async (req, res) => {
    const { firstName, lastName, Country, Address, townCity, postCode, Phone, Email } = req.body;
    let list_products = await cart_service.cartDetails(req.session.cart);
    if (list_products.products && firstName && lastName && Country && Address && townCity && postCode && Phone, Email) {

        let Price = 0;
        for (let i = 0; i < list_products.products.length; i++) {
            Price += list_products.products[i].price;
            let product = await product_service.get(parseInt(list_products.products[i].id));
            console.log(list_products.products[i].id);
            console.log(typeof(list_products.products[i].id));
            let num_purchase = list_products.products[i].quantity + product.Total_purchase;
 
            await service.update_total_purchase(num_purchase, list_products.products[i].id)
        }

        await service.insertShippingDetail(firstName, lastName, Country, Address, townCity, postCode, Phone, Email, Price);
    }
    res.redirect('/home-page/checkout');
}