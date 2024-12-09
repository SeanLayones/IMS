const express = require('express');
const router = express.Router();
const Item = require('../models/item');

// Get all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.render('index', { items });
});

// Add new item (GET and POST)
router.get('/add', (req, res) => {
  res.render('addItem');
});

router.post('/add', async (req, res) => {
  await Item.create(req.body);
  res.redirect('/items');
});

// Edit item (GET and POST)
router.get('/edit/:id', async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.render('editItem', { item });
});

router.post('/edit/:id', async (req, res) => {
  await Item.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/items#items');
});

// Delete item
router.post('/delete/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.redirect('/items');
});

module.exports = router;
