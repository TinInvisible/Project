const service = require('./Service');
const qs = require('qs');

exports.get_HomePage = (req,res) => {

    res.render('admin/home-page', {layout: 'layout_admin.hbs'});
}
exports.get_Pages = (req,res) => {
    //res.render('products/list');
    res.render('admin/' + req.params.slug,{layout: 'layout_admin.hbs'});
}
exports.getProFile = async (req, res, next) => {
    const { id } = req.user;
    const user = await service.getID(id);
    if (!user) return next(createError(404));
    res.render('admin/profile', { user, layout:'layout_admin.hbs' });
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
        if (age) {
            await service.change_age(age, id);
        }
        if (gender) {
            await service.change_gender(gender, id);
        }
    }
    res.redirect('/admin/profile');
}

exports.manageProduct = async (req, res) => {
    const { name_add } = req.body;
    const { price } = req.body;
    const { shortDes } = req.body;
    const { longDes } = req.body;
    const { category_add } = req.body;
    const { branding_add } = req.body;



    if (name_add && price && shortDes && longDes && category_add && branding_add) {
        await service.addProduct(name_add, price, shortDes, longDes, category_add, branding_add);
    }

   

    // if (Clothing) {
    //     await service.filter_category(Clothing);
    // }
    // else if (Shoes) await service.filter_category(Shoes);
    // else if (Bags) await service.filter_category(Bags);
    // else if (Accessory) await service.filter_category(Accessory);
    // else if (LuoisVuitton) await service.filter_branding(LuoisVuitton);
    // else if (Hermes) await service.filter_branding(Hermes);
    // else if (Gucci) await service.filter_branding(Hermes);
    // else if (Channel) await service.filter_branding(Channel);
    res.redirect('/admin/tables');

};


exports.List = async (req, res) => {
    
    const {status} = req.query;
    const {time} = req.query;


    let order =[];


    if(status === "DaGiao"){
        order = await service.getOrderListByStatus();

    }
    else if(status ==="ChuaGiao"){
        order = await service.getOrderListByStatus1();
 
    }
    else if(time ==="asc"){
        order = await service.getOrderListByTimeAsc();
    }
    else if(time ==="desc"){
        order = await service.getOrderListByTimeDesc();
    }
    else{
    order =  await service.getOrderList();
    }
 
    res.render('admin/billing',{order, layout:'layout_admin.hbs'});
}


exports.Revenue = async (req, res) => {
    const {date:dateFilter}= req.query;
    const {date1: dateFilter1} = req.query;
    let revenue = [];
     if (dateFilter){
     revenue = await service.filter(dateFilter);
     console.log(revenue);
     }
     if (dateFilter1){
        revenue = await service.filter1(dateFilter1);
     }

     else{
    revenue = await service.getOrderList();
        console.log(revenue);
     }
 
     res.render('admin/dashboard',{revenue, layout:'layout_admin.hbs'});

}


exports.updateStatus = async (req, res, next) => {
    const {IdOrder}= req.params;
  
    const {statusUpdate} = req.body;

  
    await service.updateStatus(statusUpdate,IdOrder);
   
    res.redirect('/admin/billing')
    
}



exports.details = async (req, res, next) => {
    const { IdOrder } = req.params;
    let orders = [];
  
  
    orders = await service.getAll();
    
  
    const order = await service.getOrder(IdOrder);
    
    res.render('admin/notifications', {order, layout:'layout_admin.hbs'});
  };