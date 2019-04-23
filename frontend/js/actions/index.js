import { createAction } from 'redux-actions';

export const transactionsReceived = createAction('TRANSACTIONS_RECEIVED');

export const subscribeToTransaction = createAction('SUBSCRIBE_TO_TRANSACTION');

export const unSubscribeFromTransaction = createAction('UNSUBSCRIBE_FROM_TRANSACTION');

export const initializeSubscriptions = createAction('INITIALIZE_SUBSCRIPTIONS');

export const initializeTransactionsLimit = createAction('INITIALIZE_TRANSACTIONS_LIMIT');

export const changeTransactionsLimit = createAction('CHANGE_TRANSACTIONS_LIMIT');
