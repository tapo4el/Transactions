import { handleActions } from 'redux-actions';

import { transactionsReceived } from '../actions';

const initialState = [];

export default handleActions({
  [transactionsReceived]: (state, { payload }) => payload,
}, initialState);
