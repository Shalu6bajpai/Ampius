const User = require('../models/user');
const path = require('path');
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

module.exports.data =  (req, res) =>{
    console.log('inside data controller :',req.body);

    const CMD = 'python .\\pgeocode.py ' + req.body.postalCode + " " + req.body.uname ;
    const exec = require('child_process').exec(CMD,{cwd:path.join(__dirname,'../scripts')} ,(error, stdout,stderr)=> {
        // console.log('cwd : ',cwd);
        if (error) {
        console.error(`exec error: ${error}`);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        let result = stdout.replace(/'/g,'"');
        return res.status(200).json(JSON.parse(result));
    })
}

module.exports.fetchDataFromPythonScript = async (req,res) =>{
    console.log('body : ',req.body);
    let user = await User.create({username: 'P',location: [req.body.latitude, req.body.longitude]});
    return res.status(200).json({
        data: {
            message: req.body
        }
    });
}



