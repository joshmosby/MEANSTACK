/*
 * Karan Varindani
 * karan301@bu.edu
 * Homework 2
 * BUCS 591 - SA12017
 * June 8, 2017
*/

const express = require('express')
const router = express.Router()

// Initiate mongoose connection
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/cs591/')
const db = mongoose.connection
db.once('open', function () {
  console.log('Connection successful.')
})

// Define schema as len
const Schema = mongoose.Schema
const stringSchema = new Schema({
    name: String,
    length: String
})
const len = mongoose.model('len', stringSchema)


// GET -- Fetch all strings
router.get('/', function (req, res, next) {
  len.find({}, function (err, results) {
    res.json(results);
  })

})

// GET -- findOne, or add new string
router.get('/:_name', function (req, res, next) {
    let name = req.params._name

    len.findOne({name: name}, function (err, result) {
	if(result == null) {
	    const aString = new len ( {name: name, length: name.length})
	    aString.save(function(err) {
		if (err) {res.send(err)}
		else {res.send (aString)}
	    })
	}
	else {res.json(result)}
  })
})

// POST -- findOne, or add new string
router.post('/', function(req, res, next) {
    let name = req.body.name

    len.findOne({name: name}, function (err, result) {
	if(result == null) {
            const aString = new len ( {name: name, length: name.length})
            aString.save(function(err) {
                if (err) {res.send(err)}
                else {res.send (aString)}
	    })
        }
        else {res.json(result)}
    })
})

// DELETE -- findOneAndRemove, or return error
router.delete('/:_name', function (req, res, next) {
    let name = req.params._name
    
    len.findOne({name: name}, function (err, result) {
	if(result == null) {
            res.json({message: 'String not found.'})
    }
    else {
	    len.findOneAndRemove({name:name}, function (err, result) {
		res.json({message: 'Success.'})
	    })
	}
  })
})

module.exports = router;
