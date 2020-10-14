const mongoose=require('mongoose');
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false ,
};
mongoose.connect("mongodb+srv://pixemployer:12345@cluster0.adaoa.mongodb.net/pixemlployer_db?retryWrites=true&w=majority",options);

const db = mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting to Mongodb'));

db.once('open',function(){
    console.log('Connected to Database:: Mongodb');
});
module.exports=db;