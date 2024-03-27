const express  = require('express');
const app = express()

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

app.get('/posts', (req,res) => {
    res.json(posts)
})

app.listen(3000)