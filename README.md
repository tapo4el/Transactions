# Transactions MVP
Simple application which use service worker API to show a notification after count of confirmed transactions reached the user-defined limit

## How to use 
```
yarn install
yarn build
yarn start
```
and open http://localhost:3000/

1) setup some transactions limit (e.g 2)
2) subscribe to some transactions
3) confirm subscribed transaction

to confirm transaction execute - http://localhost:3000/transactions/confirm/{transaction id}

to add more transaction - http://localhost:3000/transactions/generate


