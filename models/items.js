const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const portfolioModel = require('./models/items'); // Import your portfolio model
app.post('/add', (req, res) => {
    const { name, description } = req.body;
    portfolioModel.createItem(name, description);
    res.redirect('/');
  });
app.get('/', (req, res) => {
    const items = portfolioModel.getAllItems();
    res.render('portfolio_list.ejs', { items });
});
app.get('/view/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = portfolioModel.getItemById(id);
    res.render('portfolio_view.ejs', { item });
  });
  app.get('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = portfolioModel.getItemById(id);
    res.render('portfolio_edit.ejs', { item });
  });
  
  app.post('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    portfolioModel.updateItem(id, name, description);
    res.redirect('/');
  });
  app.get('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    portfolioModel.deleteItem(id);
    res.redirect('/');
  });
  