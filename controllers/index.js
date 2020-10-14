const spawn = require('child_process').spawn;
const User = require('../models/user');

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

module.exports.data = (req, res) =>{
    const PyProcess = spawn('python',["../scripts/pgeocode.py",req.query.postalCode,req.query.country]);
}

module.exports.fetchDataFromPythonScript = async (req,res) =>{
    console.log('body : ',req.body);
}

