import { handleActions } from 'redux-actions';

import { subscribeToTransaction, unSubscribeFromTransaction } from '../actions';

const initialState = [];

export default handleActions({
    [subscribeToTransaction]: (state, { payload }) => state.concat(payload),
    [unSubscribeFromTransaction]: (state, { payload }) => state.filter(id => id != payload),
}, initialState);
