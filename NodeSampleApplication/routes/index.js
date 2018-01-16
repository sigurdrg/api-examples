var express = require('express');
var router = express.Router();

var service = require('../service/sbankenapi');

router.get('/api/data', function(req, res, next) {
  service.getAccessToken().then(data => {
    console.log('Key: ', data);
    service.getAccountDetails(data.access_token).then(accountData => {
      console.log('Account data: ', accountData);
      res.json(accountData);
    }, error => {
      res.json({});
    });
  }, error => {
    res.json({});
  });
});

module.exports = router;
