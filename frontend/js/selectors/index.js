import { createSelector } from 'reselect';

const appState = state => state;

export const getTransactions = createSelector(
    appState,
    ({ transactions }) => transactions
);

export const getSubscriptions = createSelector(
    appState,
    ({ subscriptions }) => subscriptions
);
