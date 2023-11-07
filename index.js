const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Set the view engine and configure the static directory (if needed)
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Require the model and controller files
const portfolioModel = require('./models/portfolio_item'); // Adjust the path as needed
const portfolioController = require('./controllers/PortfolioController'); // Adjust the path as needed

// Mount the controller with a specific route
app.use('/', portfolioController);

// Start the Express application
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
