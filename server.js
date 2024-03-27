const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());

const users = [
//   {
//     "name": "John",
//     "password": "BellaLugosi"
//   }
];

// Array of posts to be displayed
const posts = [
  {
    username: 'Test Username 1',
    title: 'Test Title 1'
  },
  {
    username: 'Test Username 2',
    title: 'Test Title 2'
  },
  {
    username: 'Test Username 3',
    title: 'Test Title 3'
  }
];

// Display all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Register a new user
app.post('/users', async (req, res) => {
    try {
      console.log("Request body:", req.body); // Log request body to inspect received data
  
      const saltRounds = 10; // Number of salt rounds for hashing
  
      if (!req.body || !req.body.password) {
        throw new Error("Missing password field in request body.");
      }
  
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
  
      const user = {
        name: req.body.name,
        password: hashedPassword
      };
  
      users.push(user);
  
      console.log("Users array:", users); // Log updated users array
  
      res.status(201).json({ message: "User created successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error." });
    }
  });
  
  

// Display all posts
app.get('/posts', (req, res) => {
  res.json(posts);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
