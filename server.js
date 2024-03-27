const express  = require('express');
const app = express()
const bcrypt = require( 'bcrypt' );

app.use(express.json())

const users = []

//array of posts to be displayed
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
]

app.get('/users', (req, res) => {
    //send back the array of users as a response
    res.json(users)
})

app.post('/users', (req, res) => {
    const user = { 
        name: req.body.name, 
        password: req.body.password
    }
    users.push(user)
    res.status(201).send()
})

// get-call to display posts
app.get('/posts', (req,res) => {
    res.json(posts)
})

app.get('/login', (req,res) => {
    // authenticate the user

})

app.listen(3000)