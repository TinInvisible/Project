
const passport = require('../../components/auth/passport');
exports.check_admin = (req, res, next) =>{
    if(!req.body)
    {
        res.redirect('/admin/sign-in');
        return;
    }
    if(!req.body['email'].includes("admin.")){
        res.redirect('/admin/sign-in');
        return;
    }
   
    next();
}