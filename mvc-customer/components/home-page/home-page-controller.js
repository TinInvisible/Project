const service = require('./home-page-service');
const cart_service = require('../cart/cartService')
const bcrypt = require('bcryptjs');
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
        return;
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
    const { old_pass } = req.body;
    const { new_pass } = req.body;
    const { edit } = req.body;
    if (id) {
        if (edit === "edit_name") {
            if (name == req.user.name) {
                res.render('products/profile', { error: 'Your input is the same with the old one' });
                return;
            }
            else if (!name) {
                res.render('products/profile', { error: 'Enter new name' });
                return;
            }
            else {
                await service.change_name(name, id);
            }
        }
        else if (edit === "edit_age") {
            if (!age) {
                res.render('products/profile', { error1: 'Enter new age' });
                return;
            }
            await service.change_age(age, id);
        }
        else if (edit === "edit_gender") {
            if (!gender) {
                res.render('products/profile', { error2: 'Enter new gender' });
                return;
            }
            await service.change_gender(gender, id);
        }
        if (edit === "change_pass") {
            if (!old_pass) {
                res.render('products/profile', { error3: 'Enter old password' });
                return;
            }
            else {
                const user = await service.getID(id);
                if (!await bcrypt.compare(old_pass, user.password)) {
                    res.render('products/profile', { error3: 'Incorrect old password' });
                    return;
                }
            }
            if (!new_pass) {
                res.render('products/profile', { error4: 'Enter new password' });
                return;
            }
            if (new_pass.length < 6) {
                res.render('products/profile', { error4: 'Your password must contain at least 6 character' });
                return;
            }
            await service.change_pass(old_pass, new_pass, id);

        }
    }
    res.redirect('/home-page/profile');
}

exports.insertShippingDetail = async (req, res) => {
    const { firstName, lastName, Country, Address, townCity, postCode, Phone, Email, Day, Month, Year, checkout } = req.body;
    if (checkout) {
        let list_products = await cart_service.cartDetails(req.session.cart);
        if (list_products.products && firstName && lastName && Country && Address && townCity && postCode && Phone, Email && Day && Month && Year) {
            let Price = 0;
            for (let i = 0; i < list_products.products.length; i++) {
                Price += list_products.products[i].price;
                let product = await product_service.get(parseInt(list_products.products[i].id));
                console.log(list_products.products[i].id);
                console.log(typeof (list_products.products[i].id));
                let num_purchase = list_products.products[i].quantity + product.Total_purchase;

                await service.update_total_purchase(num_purchase, list_products.products[i].id)
            }
            let day = Year + "-" + Month + "-" + Day;
            await service.insertShippingDetail(firstName, lastName, Country, Address, townCity, postCode, Phone, Email, Price, day);
            res.render('products/checkout',{notice: 'Complete'});
            return;
        }
        else{
            res.render('products/checkout',{notice:'Please input full of the information'});
            return;
        }
    }
}