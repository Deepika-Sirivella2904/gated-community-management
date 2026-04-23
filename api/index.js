const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const pool = require('../backend/src/db/pool');
const { generateToken, authenticate } = require('../backend/src/middleware/auth');

const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// Routes
app.use('/auth', require('../backend/src/routes/auth'));
app.use('/visitors', require('../backend/src/routes/visitors'));
app.use('/amenities', require('../backend/src/routes/amenities'));
app.use('/complaints', require('../backend/src/routes/complaints'));
app.use('/notices', require('../backend/src/routes/notices'));
app.use('/staff', require('../backend/src/routes/staff'));
app.use('/bills', require('../backend/src/routes/bills'));
app.use('/notifications', require('../backend/src/routes/notifications'));
app.use('/emergency', require('../backend/src/routes/emergency'));
app.use('/vehicles', require('../backend/src/routes/vehicles'));
app.use('/society', require('../backend/src/routes/society'));

// Export for Vercel
module.exports = app;
