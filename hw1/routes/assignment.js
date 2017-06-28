const express = require('express')
const router = express.Router()

// Test Method
router.get('/', function(req, res, next) {
  res.send('Testing');
});

// GET Method
router.get('/:name', function (req, res, next) {
    let theGet = req.params.name
    res.json({string: theGet, length: theGet.length})
});

// POST Method
router.post('/', function (req, res, next) {
    let thePost = req.body.testing
    res.json({string: thePost, length: thePost.length})
});

module.exports = router;