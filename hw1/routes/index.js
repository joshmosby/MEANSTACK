var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({“string”: “short”, “length”: 5});
});

router.post('/', function(req, res, next) {
    res.json({“string”: “short”, “length”: 5});
});

module.exports = router;
