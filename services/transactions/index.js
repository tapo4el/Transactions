const express = require('express');
const router = express.Router();
const _ = require('lodash');
let transactionsList = require('./transactionsList');

router.get('/unconfirmed', function(req, res, next) {
    res.send(transactionsList);
});

router.put('/confirm', function(req, res, next) {
    if (transactionsList.findIndex(el => el.id === req.query.id) !== -1) {
        transactionsList = transactionsList.filter(el => el.id !== req.query.id);
        res.send(`Transaction ${req.query.id} confirmed.`);
    } else {
        res.send(`Transaction with id ${req.query.id} do not in unconfirmed list.`);
    }
});

module.exports = router;
