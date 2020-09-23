import * as R from 'ramda';

import {
    FETCH_PERSON_SUCCESS,
    LOAD_MORE_PERSONS_SUCCESS
} from '../actions/actionTypes'

const initialState = {

};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_PERSON_SUCCESS:
            return R.merge(state, payload);
        case LOAD_MORE_PERSONS_SUCCESS:
            return R.merge(state, payload);
        default:
            return state;
    }
}