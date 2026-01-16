const express = require('express');
require('dotenv').config();
const app = express();
const port = 8080;

const noteRoutes = require('./routes/noteRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(express.json());


app.use('/api/notes', noteRoutes);
app.use('/api/auth', authRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 