const User = require('../models/user');
const path = require('path');
const { runInNewContext } = require('vm');
//Rendering the user page
module.exports.user = function(req, res){
    
        return res.render('index', {
        title: 'User Page',
    });
}
//Rendering admin page
module.exports.admin = async function(req, res){
    let user = await User.find({});
    return res.render('admin', {
    title: 'Admin Page',
    users: user
});
}
//Accessing data from user
module.exports.Userdata =  (req, res) =>{
    console.log('inside data controller :',req.body);
    let port = 8000;
    const CMD = 'python .\\zipcode.py ' + req.body.postalCode + " " + req.body.username + " " +  port;
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
        return res.render('map',JSON.parse(result));
    })
}
//Fetching the data for mapping 
module.exports.fetchData = async (req,res) =>{
    console.log('body : ',req.body);
    let user = await User.findOne({username: req.body.username});
    if(user){
        let str = req.body.longitude + "," + req.body.latitude ;
        user.location.push(str);
        await user.save() ;
        return res.status(200).json({
            data: user 
        });
    }
    user = await User.create({username: req.body.username,location: [req.body.latitude + "," + req.body.longitude]});
    return res.status(200).json({
        data: user
    });
}



