import { createStore } from 'redux';
import rootReducer from '../reducers';

// Defining the Root State Type
// Both mapState and useSelector depend on declaring the type of the complete Redux store state value. While this type could be written by hand, the easiest way to define it is to have TypeScript infer it based on what your root reducer function returns. This way, the type is automatically updated as the reducer functions are modified.

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}