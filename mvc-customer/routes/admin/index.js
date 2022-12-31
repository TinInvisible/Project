const express = require('express');
const router = express.Router();

const adminController = require('../../components/admin/home-page-controller/mainPageController');
const authController = require('../../components/admin/auth/authController');
const passport = require('../../components/auth/passport');
const tables = require('../../components/admin/tables/controller');
const admin_check = require('../../components/middleware/middleware.js')

router.get('/', adminController.get_HomePage);
router.get('/sign-up', authController.showRegistrationForm);
router.post('/sign-up', authController.register);
router.get('/sign-in', authController.showLoginForm);
router.post('/sign-in',passport.authenticate('admin-local', {
  successRedirect: '/admin',
  failureRedirect: '/admin/sign-in',
}));
router.get('/logout', authController.logout);
router.get('/tables',tables.tables);
router.get('/profile/:id', adminController.getProFile);
router.post('/profile/:id', adminController.editProfile);

router.post('/tables', adminController.addProduct);

router.get('/:slug', adminController.get_Pages);
module.exports = router;