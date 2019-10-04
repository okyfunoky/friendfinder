var express = require('express');

var app = express();

var PORT = process.env.PORT || 3000;

//setup app to parse post data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// //html routes, will sendback the homepage
var htmlRoutes = require('./app/routes/htmlroutes');
app.use(htmlRoutes);

var apiRoutes = require('./app/routes/apiRoutes');
app.use('/api',apiRoutes);

//set up app to listen for request

app.listen(PORT,function(){
    console.log('server running on port ' + PORT)
});