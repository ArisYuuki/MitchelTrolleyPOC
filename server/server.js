// server.js
// Express server with one route: GET /foods
const express = require('express');
const path = require('path');
const FoodDatabase = require('./foodDb');

const app = express();
const PORT = process.env.PORT || 3000; // dynamic port for deployment
const db = FoodDatabase.getInstance();

// JSON middleware
app.use(express.json());

// Serve the frontend from /public
app.use(express.static(path.join(__dirname, '..', 'public')));

// GET /foods - returns all food items as JSON (200)
app.get('/foods', (req, res) => {
  const foods = db.getAll();
  console.log(`GET /foods - returned ${foods.length} items`);
  res.status(200).json(foods);
});

// 404 handling for any other route
app.use((req, res) => {
  console.log(`404 - ${req.method} ${req.url} not found`);
  res.status(404).json({ error: 'Route not found' });
});

// Only start listening when run directly (so tests can import the app)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
