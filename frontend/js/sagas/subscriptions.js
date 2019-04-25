import { put, takeEvery, select } from 'redux-saga/effects';

import storeManager from '../utils/storeManager';
import { initializeSubscriptions, subscribeToTransaction, unSubscribeFromTransaction } from '../actions';
import { getSubscriptions } from '../selectors';

const storeKey = 'subscriptions';

export function* initSubscriptions() {
    const payload = yield storeManager.readData(storeKey);
    yield put(initializeSubscriptions(payload || []));
}

export function* storeSubscriptions() {
    const payload = yield select(getSubscriptions);
    yield storeManager.writeData(storeKey, payload);
}

export function* watchSubscriptionsChange() {
    yield takeEvery([subscribeToTransaction().type, unSubscribeFromTransaction().type], storeSubscriptions);
}
