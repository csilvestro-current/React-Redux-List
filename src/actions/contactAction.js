import * as actionTypes from './actionType';
//createContact() function returns an object that describes two things. action type and payload

export const createContact = (contact) => {
    return {
        type: actionTypes.CREATE_NEW_CONTACT,
        contact: contact
    }
};

export const deleteContact = (id) => {
    return {
        type: actionTypes.REMOVE_CONTACT,
        id: id
    }
}