const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send("actions route up!")
});

router.get('/:id', (req, res) => {
  
});

router.post('/', (req, res) => {
  
});

router.delete('/:id', (req, res) => {
  
});

router.put('/:id', (req, res) => {
  
});

module.exports = router;