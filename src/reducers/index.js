import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import Persons from './persons';

export default history => combineReducers({
    Persons,
    router: connectRouter(history)
})