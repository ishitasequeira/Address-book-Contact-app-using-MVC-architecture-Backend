
'use strict';
module.exports = function (app) {
    /**
    * @property {Object} contactModel - Initialize models
    *
    */
    let contactModel = require('./models/contact');

    /**
     * @property {Object} contactModel -Initialize routes(point to route.js)
     */
    let contactRoutes = require('./routes/contact-route');
    contactRoutes(app);
};