import { put, delay, call } from 'redux-saga/effects';
import { fetch } from 'whatwg-fetch';

import { transactionsReceived } from '../actions';

export function* fetchUnconfirmed() {

    const response = yield call(fetch, `/transactions/unconfirmed`);
    const payload = yield call([response, response.json]);

    yield put(transactionsReceived(payload));
}

export default function* runFetchWithInterval() {
    while (true) {
        yield call(fetchUnconfirmed);
        yield delay(5000);
    }
}
