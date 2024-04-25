const express = require('express');
const appCache = require('../services/cache');
const router = express.Router();

/* GET key-value */
router.get('/:id', function(req, res, next) {
  const result = appCache.get(req.params.id)

  if (result) {
    res.json({result});
  } else {
    res.status(404).json({error: "not found"})
  }
});

/* POST key-value */
router.post('/', function(req, res, next) {
  const {id, value, ttl} = req.body;
  appCache.set(id, value, ttl);

  res.json({result: "ok"})
});

/* DELETE key-value */
router.delete('/:id', function(req, res, next) {
  appCache.del(req.params.id);

  res.json({result: "ok"})
});

module.exports = router;
