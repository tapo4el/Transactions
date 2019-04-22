import { createAction } from 'redux-actions';

export const transactionsReceived = createAction('TRANSACTIONS_RECEIVED');

export const subscribeToTransaction = createAction('SUBSCRIBE_TO_TRANSACTION');

export const unSubscribeFromTransaction = createAction('UNSUBSCRIBE_FROM_TRANSACTION');
