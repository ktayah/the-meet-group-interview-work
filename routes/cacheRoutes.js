var express = require('express');
var router = express.Router();

/* GET key-value */
router.get('/:key', function(req, res, next) {
  // Get the value from the cache via the key
  // res.json({users: [{name: 'Timmy'}]});
  res.json({ok: "ok"})
});

/* POST key-value */
router.post('/', function(req, res, next) {
  // Add the key-value pair to the cache
  // res.json({users: [{name: 'Timmy'}]});
  res.json({ok: "ok"})
});

/* DELETE key-value */
router.delete('/:id', function(req, res, next) {
  // Dekete the key-value pair from the cache
  res.json({ok: "ok"})
});

module.exports = router;
