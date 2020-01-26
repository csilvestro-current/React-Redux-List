import * as actionTypes from '../actions/actionType';

// Reducers are used to update the state object in your store. Just like actions, your application can have multiple reducers.
//the new state is original state array + new contact data and returns a new collection.

export default (state = [], action) => {
    switch (action.type){
        case actionTypes.CREATE_NEW_CONTACT:
        return [
            ...state,
            Object.assign({}, action.contact)
        ];
        default:
                return state;
    }
};