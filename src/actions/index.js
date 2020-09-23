import {
    FETCH_PERSON_START,
    FETCH_PERSON_SUCCESS,
    FETCH_PERSON_FAILED,
    LOAD_MORE_PERSONS_START,
    LOAD_MORE_PERSONS_SUCCESS,
    LOAD_MORE_PERSONS_FAILED
} from './actionTypes';

import {
    fetchPersonsApi,
    fetchMorePersonsApi
} from '../api';

export const fetchPersons = () => async dispatch => {
    dispatch({
        type: FETCH_PERSON_START
    });

    try {
        const persons = await fetchPersonsApi();
        dispatch({
            type: FETCH_PERSON_SUCCESS,
            payload: persons
        });
    } catch (err) {
        dispatch({
            type: FETCH_PERSON_FAILED,
            payload: err,
            error: true
        });
    }
}

export const fetchMorePersons = (page, offset) => async dispatch => {
    dispatch({
        type: LOAD_MORE_PERSONS_START
    });

    try {
        const persons = await fetchMorePersonsApi(page, offset);
        dispatch({
            type: LOAD_MORE_PERSONS_SUCCESS,
            payload: persons
        });
    } catch (err) {
        dispatch({
            type: LOAD_MORE_PERSONS_FAILED,
            payload: err,
            error: true
        });
    }
}