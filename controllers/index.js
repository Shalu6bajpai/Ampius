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
    const spawn = require('child_process').spawn;
    const PyProcess = spawn('python',[path.join(__dirname, '../scripts/pgeocode.py'),req.body.postalCode,req.body.country]);
    PyProcess.stdout.on('data',(data)=>{
        res.send(data.toString());
    });
    PyProcess.on('exit', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

module.exports.fetchDataFromPythonScript = async (req,res) =>{
    console.log('body : ',req.body);
    return res.status(200).json({
        data: {
            message: "long and latt "
        }
    });
}



