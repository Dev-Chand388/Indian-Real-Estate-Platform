const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.get('/api/properties', (req, res) => {
  // Mock data for now
  const properties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      price: 450000,
      location: 'Downtown',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      type: 'apartment'
    }
  ];
  res.json(properties);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});