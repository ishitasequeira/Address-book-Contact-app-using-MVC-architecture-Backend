/**
 * 
 * @desc Contact endpoint route definitions.
 */
'use strict';
module.exports = function (app) {
    const contactController = require('../controllers/contact-controller');

    /**
    * 
    * @desc Contact Routes for search and create
    */
    app.route('/contacts')
        .get(contactController.list)
        .post(contactController.post);

    /**
     * 
     * @desc Contact Routes for get, update and delete
     */
    app.route('/contacts/:contactId')
        .get(contactController.get)

};