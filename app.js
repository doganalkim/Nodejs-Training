const express = require('express');
const app = express();
const port = 8080;

const noteRoutes = require('./routes/noteRoutes')

app.use(express.json());


app.use('/api/notes', noteRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
}); 