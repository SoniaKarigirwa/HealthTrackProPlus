const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Use the provided port or default to 3000

// Import routes
const apiRoutes = require('./routes/api');

// Middleware
app.use(express.json()); // Parse JSON request bodies

// Define routes
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
