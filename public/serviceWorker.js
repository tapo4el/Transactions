importScripts('localforage.min.js');

self.addEventListener('push', (event) => {
  const unconfirmedTrans = event.data.json() || [];
  event.waitUntil(
    Promise.all([localforage.getItem('subscriptions'), localforage.getItem('transactionsLimit')])
      .then(([subscriptions, transactionsLimit]) => {
        const confirmedTrans = subscriptions.filter(elem => !unconfirmedTrans.includes(elem));
        if (confirmedTrans.length >= transactionsLimit) {
          localforage.setItem('subscriptions', subscriptions.filter(elem => !confirmedTrans.includes(elem)))
            .then(() => {
              self.registration.showNotification('Transactions', {
                body: 'Транзакцию, которую вы ожидали, была подтверждена',
              });
            });
        }
      }),
  );
});
