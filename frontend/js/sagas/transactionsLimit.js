import { put, select, takeEvery } from 'redux-saga/effects';

import storeManager from '../utils/storeManager';
import { changeTransactionsLimit, initializeTransactionsLimit } from '../actions';
import { getTransactionsLimit } from '../selectors';

const storeKey = 'transactionsLimit';

export function* initTransactionsLimit() {
  const payload = yield storeManager.readData(storeKey) || 0;
  yield put(initializeTransactionsLimit(payload));
}

export function* storeTransactionsLimit() {
  const payload = yield select(getTransactionsLimit);
  yield storeManager.writeData(storeKey, payload);
}

export function* watchTransactionsLimitChange() {
  yield takeEvery([changeTransactionsLimit().type], storeTransactionsLimit);
}
