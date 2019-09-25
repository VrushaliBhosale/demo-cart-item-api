let express = require('express');
let app = express();  //initializing an app with express
let bodyParser = require('body-parser');
let defaultRoutes = require('./api-routes/default-route');
let itemRoutes = require('./api-routes/item-routes');
let mongoose = require('mongoose');
var db=mongoose.connect('mongodb://localhost/', { useNewUrlParser: true});
if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

var port=process.env.port || 3001; //initializing a port

//msg to the default url i.e "/"
app.get('/',(req,res) => res.send("Hello !! welcome to the cart api"));

//configuered to handle post requests ...no need to use 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api', defaultRoutes);
// app.use('/api/items',itemRoutes);

//listen to the port
app.listen(port,function(){
    console.log("listening on port",port);
})



