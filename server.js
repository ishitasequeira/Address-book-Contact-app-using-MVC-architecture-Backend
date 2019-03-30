/**
 * @param {} express -import  the express framework
 * @param {} app - creating an instance of express
 * @param {} contactModel -created model loading here
 * @param {} bodyparser - importing body parsing
 */
let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
/**
 * @desc mongoose instance  url connection
 */
mongoose.connect('mongodb://localhost:27017/contactDB', {
    useMongoClient: true
});

/**
 * @desc Adding body parser for handling request and response objects.
 */
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

/**
 * @desc Enabling CORS
 */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
/**
 * 
 * @desc initApp - Initialize app(this would intialize your model and routes)
 */
let initApp = require('./api/app');
initApp(app);

app.listen(port);
/**
 * @desc intiates the server
 */
console.log('Contacts RESTful API server started on: ' + port);