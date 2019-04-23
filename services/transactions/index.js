const express = require('express');
const router = express.Router();
const crypto = require('crypto');

let transactionsList = require('./transactionsList');

router.get('/unconfirmed', function(req, res, next) {
    res.send(transactionsList);
});

router.get('/confirm/:id', function(req, res, next) {
    if (transactionsList.findIndex(el => el.id === req.params.id) !== -1) {
        transactionsList = transactionsList.filter(el => el.id !== req.params.id);
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

module.exports = router;
