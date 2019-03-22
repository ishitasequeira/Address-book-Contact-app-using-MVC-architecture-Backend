
'use strict';
module.exports = function (app) {
    //Initialize models
    let contactModel = require('./models/contacts');

    //Initialize routes(point to route.js)
    let contactRoutes = require('./routes/contact-route');
    contactRoutes(app);
};