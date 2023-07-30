// Create web server
// npm run dev
// npm run start

const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create a web server
const app = express();

// Enable CORS
app.use(cors());

// Enable body parser
app.use(bodyParser.json());

// Create an object to store comments
const commentsByPostId = {};

// Create a route to get comments
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

// Create a route to post comments
app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    // Get comments for a post
    const comments = commentsByPostId[req.params.id] || [];

    // Add a new comment
    comments.push({ id: commentId, content });

    // Save comments
    commentsByPostId[req.params.id] = comments;

    // Send a response
    res.status(201).send(comments);
});

// Start a web server
app.listen(4001, () => {
    console.log('Comments server is listening on port 4001');
});