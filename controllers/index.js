module.exports.user = function(req, res){
    
        return res.render('index', {
        title: 'User Page',
    });
}
module.exports.admin= function(req, res){
    
    return res.render('admin', {
    title: 'Admin Page',
});
}