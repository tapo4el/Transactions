import { handleActions, combineActions } from 'redux-actions';

import { initializeTransactionsLimit, changeTransactionsLimit } from '../actions';

const initialState = 0;

export default handleActions({
  [combineActions(initializeTransactionsLimit, changeTransactionsLimit)]: (state, { payload }) => payload,
}, initialState);
