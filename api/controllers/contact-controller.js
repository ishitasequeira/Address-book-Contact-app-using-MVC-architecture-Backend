/**
 * @desc Controller for contact endpoints.
 */

'use strict';
/**
 * @desc import contact service.
 */
const contactService = require('../services/contact-service');
/**
 * @return  Returns a list of stickies in JSON based on the search parameters.
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
 * @desc Creates a new contact with the request JSON and
 * @return returns contact JSON object.
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newContact = Object.assign({}, request.body);
    //console.log("C"+newContact.phoneNumber);
    const resolve = (contact) => {
        response.status(200);
        response.json(contact);
    };
    contactService.save(newContact)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


/**
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 * @return Returns a contact object in JSON.
 */
exports.get = function (request, response) {
    const resolve = (contact) => {
        response.status(200);
        response.json(contact);
    };
    contactService.get(request.params.contactId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};



/**
 * @desc Throws error if error object is present.
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