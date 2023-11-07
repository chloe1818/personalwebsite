// controllers/PortfolioController.js
const express = require('express');
const router = express.Router();
const portfolioModel = require('./models/items'); // Adjust the path as needed
const path = require('path');

// CREATE (Add) a New Portfolio Item
router.post('/add', (req, res) => {
  const { name, description } = req.body;
  portfolioModel.createItem(name, description);
  res.redirect('/');
});

// READ (List) All Portfolio Items
router.get('/', (req, res) => {
  const items = portfolioModel.getAllItems();
  res.render(path.join(__dirname, '../views/portfolio_list.ejs'), { items });
});

// READ (View) a Specific Portfolio Item
router.get('/view/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = portfolioModel.getItemById(id);
  res.render(path.join(__dirname, '../views/portfolio_view.ejs'), { item });
});

// UPDATE (Edit) a Portfolio Item (View/Edit)
router.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = portfolioModel.getItemById(id);
  res.render(path.join(__dirname, '../views/portfolio_update.ejs'), { item });
});

// UPDATE (Edit) a Portfolio Item (Submit Changes)
router.post('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  portfolioModel.updateItem(id, name, description);
  res.redirect('/');
});

// DELETE a Portfolio Item
router.get('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id);
  portfolioModel.deleteItem(id);
  res.redirect('/');
});

module.exports = router; // Export the router as a module
