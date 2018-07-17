import productsReducer from '../reducers/productsReducer';
import userReducer from '../reducers/userReducer';

import { combineReducers } from 'redux';

// Combine reducers
const rootReducer = combineReducers({
    user: userReducer,
    products: productsReducer
});

export default rootReducer;