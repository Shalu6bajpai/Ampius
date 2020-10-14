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
    // const spawn = require('child_process').spawn;
    // const PyProcess = spawn('python',[path.join(__dirname, '../scripts/pgeocode.py'),req.body.postalCode]);
    // PyProcess.stdout.on('data',(data)=>{
    //     console.log(' data :',data );
    //     return res.send(data);
    // })
    // PyProcess.on('exit', (code) => {
    //     console.log(`child process exited with code ${code}`);
    // });
    const CMD = 'python .\\pgeocode.py ' + req.body.postalCode
    const exect = require('child_process').exec(CMD,{cwd:path.join(__dirname,'../scripts')} ,(error, stdout,stderr)=> {
        // console.log('cwd : ',cwd);
        if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        return res.status(200).json(stdout);
    })
}

module.exports.fetchDataFromPythonScript = async (req,res) =>{
    console.log('body : ',req.body);
    return res.status(200).json({
        data: {
            message: req.body
        }
    });
}



