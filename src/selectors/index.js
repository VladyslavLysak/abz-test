import * as R from 'ramda';

export const getPersons = state => R.values(state.Persons);
