const express = require('express');
const app = express();

// Defining endpoints
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

// This will start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
