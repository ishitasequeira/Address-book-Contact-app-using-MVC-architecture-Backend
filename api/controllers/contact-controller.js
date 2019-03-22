/**
 * Controller for contact endpoints.
 */

'use strict';
//import contact service.
const contactService = require('../services/contact-service');
/**
 * Returns a list of stickies in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (contacts) => {
        response.status(200);
        response.json(contacts);
    };
    contactService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new contact with the request JSON and
 * returns contact JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newContact = Object.assign({}, request.body);
    console.log(newContact);
    const resolve = (contact) => {
        response.status(200);
        response.json(contact);
    };
    contactService.save(newContact)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};