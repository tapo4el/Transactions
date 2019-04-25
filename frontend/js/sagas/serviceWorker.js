import { call } from 'redux-saga/effects';
import { fetch } from 'whatwg-fetch';

import { urlBase64ToUint8Array } from '../utils/tools';

export function* registerServiceWorker() {
    const registration = yield call([navigator.serviceWorker, navigator.serviceWorker.register], 'serviceWorker.js');
    const response = yield call(fetch, '/transactions/vapidPublicKey');
    const publicKey = yield call([response, response.text]);

    const convertedPublicKey = urlBase64ToUint8Array(publicKey);

    const subscription = yield call([registration.pushManager, registration.pushManager.subscribe], {
        userVisibleOnly: true,
        applicationServerKey: convertedPublicKey
    });

    yield call(fetch, '/transactions/register',
            {
                method: 'post',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    subscription: subscription
                })
            }
        )
}
