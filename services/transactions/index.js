const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const webPush = require('web-push');

let transactionsList = require('./transactionsList');

const vapidKeys = {
    publicKey : "BKPbdRcOjHfS5PBF2XqYEH0l1wpdO8ypAUODGDW3-3AWL0g2Ozsse9rop7c9-4ij-Uw3xuZ_nVtgo0pVVZ4UXFk",
    privateKey : "l21zfyl9c86SM3myYF_KhbmUauzHgqzr41g6u5UQjjE"
};
const subscriptions = {};

webPush.setVapidDetails(
    'http://localhost:3000/',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

router.get('/unconfirmed', function(req, res, next) {
    res.send(transactionsList);
});

router.get('/confirm/:id', function(req, res, next) {
    if (transactionsList.findIndex(el => el.id === req.params.id) !== -1) {
        transactionsList = transactionsList.filter(el => el.id !== req.params.id);
        Object.values(subscriptions).forEach(elem => webPush.sendNotification(elem, JSON.stringify(transactionsList.map(i => i.id))));
        res.send(`Transaction ${req.params.id} confirmed.`);
    } else {
        res.send(`Transaction with id ${req.params.id} is not unconfirmed.`);
    }
});

router.get('/generate', function(req, res, next) {
    const id = crypto.randomBytes(16).toString("hex");

    transactionsList.push({id});
    res.send(`Transaction with id: ${id} created.`);

});

router.get('/vapidPublicKey', function(req, res) {
    res.send(vapidKeys.publicKey);
});

router.post('/register', function(req, res) {
    const subscription = req.body.subscription;

    if (!subscriptions[subscription.endpoint]) {
        subscriptions[subscription.endpoint] = subscription;
    }
    res.sendStatus(201);
});

router.post('/unregister', function(req, res) {
    const subscription = req.body.subscription;
    if (subscriptions[subscription.endpoint]) {
        delete subscriptions[subscription.endpoint];
    }
    res.sendStatus(201);
});

module.exports = router;
