import { combineReducers } from 'redux';
import contacts from './contactReducer';

//We need to create the combine reducer function.
export default combineReducers({
    contacts: contacts
});