import { all, spawn } from 'redux-saga/effects';

import { initTransactionsLimit, watchTransactionsLimitChange } from './transactionsLimit';
import { initSubscriptions, watchSubscriptionsChange } from './subscriptions';
import runFetchWithInterval from './transactions';
import registerServiceWorker from './serviceWorker';

export default function* sagas() {
  yield all([
    spawn(initTransactionsLimit),
    spawn(initSubscriptions),
    watchSubscriptionsChange(),
    watchTransactionsLimitChange(),
    runFetchWithInterval(),
    spawn(registerServiceWorker),
  ]);
}
