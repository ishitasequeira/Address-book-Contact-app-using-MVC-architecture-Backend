
'use strict';
module.exports = function (app) {
     /**
     * @property {} contactModel - Initialize models
     *
     */
    let contactModel = require('./models/contact');

    /**
     * @property {} contactModel -Initialize routes(point to route.js)
     */
    let contactRoutes = require('./routes/contact-route');
    contactRoutes(app);
};