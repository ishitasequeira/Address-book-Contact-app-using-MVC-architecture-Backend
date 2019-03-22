/**
 * Service for contact operations.
 */

'use strict';
const mongoose = require('mongoose'),
Contact = mongoose.model('contacts');

/**
 * Returns an array of sticky object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Contact.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new Contact object.
 *
 * @param {Object} contact {Contact object}
 */
exports.save = function (contact) {
    const newContact = new Contact(contact);
    const promise = newContact.save();
    return promise;
};

``