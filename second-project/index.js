const express = require('express');
const app = express();

const PORT = 5000;

// It is used to parse incoming request bodies in JSON format.
app.use(express.json());

// sample data
const users = [
  { id: 1, name: 'Aditya' },
  { id: 2, name: 'Anuj' },
  { id: 3, name: 'Ram' },
  { id: 4, name: 'Lakhan' },
];

// This endpoint will retrive all users
app.get('/', (req, res) => {
  res.json(users);
});

// This endpoint will retrive a single user by ID
app.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);

  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.json(user);
  }
});

// This endpoint will create a new user
app.post('/users', (req, res) => {
  const { name } = req.body;
  const id = users.length + 1;
  const newUser = { id, name };
  users.push(newUser);
  res.status(201).json(newUser);
});

// This endponit can be used to update the name of a user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;

  // Find the user by ID in the users array
  const user = users.find((user) => user.id === userId);

  // If user is found, update the name
  if (user) {
    user.name = name;
    res.json(user);
  } else {
    // If user is not found, return a 404 response
    res.status(404).json({ error: 'User not found' });
  }
});

// This endpoint can be used to delete a user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  // Find the index of the user in the users array
  const userIndex = users.findIndex((user) => user.id === userId);

  // If user is found, delete the user
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    // If user is not found, return a 404 response
    res.status(404).json({ error: 'User not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
