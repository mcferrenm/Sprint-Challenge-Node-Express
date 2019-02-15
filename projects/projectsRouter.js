const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("projects route up!")
});

router.get('/:id', (req, res) => {
  
});

router.get('/:id/actions', (req, res) => {
  
});

router.post('/', (req, res) => {
  
});

router.delete('/:id', (req, res) => {
  
});

router.put('/:id', (req, res) => {
  
});

module.exports = router;