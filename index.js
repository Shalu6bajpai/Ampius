const express=require('express');
const app=express();
const port= process.env.PORT || 8000;

const mongoose = require('./config/mongoose');
//ejs template for  html page
const expressLayouts=require('express-ejs-layouts');

app.use(express.urlencoded());
//assests folder use
app.use(express.static('./assets'));
app.set('view engine','ejs');
app.set('views','./views');
//Use express router
app.use('/',require('./routes'));

//Listening to port
app.listen(port,function(err){
    if(err){
        console.log("error",err);
    }
    else{
        console.log('server is running on port:',port);
    }
});