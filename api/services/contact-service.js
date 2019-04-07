/**
 * @desc Service for contact operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Contact = mongoose.model('contacts');

/**
 * @return Returns an array of contact object matching the search parameters.
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    console.log(params);
    const promise = Contact.find(params).collation({ locale: "en" }).sort("FirstName").exec();
    return promise;
};

/**
 * @param {Object} contact {Contact object}-Saves and returns the new Contact object.
 */
exports.save = function (contact) {
    const newContact = new Contact(contact);
    // let present = Contact.findOne({"FirstName":newContact.FirstName, "LastName":newContact.LastName});
    // if(!present){
        console.log("qwerty"+newContact.phoneNumber);
        const promise = newContact.save();
        return promise;
    // }else{
    //     return null;
    // }
};

/**
 * @desc Returns the contact object matching the id.
 * @param {string} contactId {Id of the sticky object}
 */
exports.get = function (contactId) {
    console.log("Service " + contactId);
    const promise = Contact.findById(contactId).exec();
    return promise;
};
