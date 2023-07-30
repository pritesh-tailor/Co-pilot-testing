// create web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var port = 3000;

// connect to mongodb
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/commentDB');

var Schema = mongoose.Schema;
var commentSchema = new Schema({
  username: String,
  comment: String,
  timestamp: Date
});
var Comment = mongoose.model('Comment', commentSchema);

// use body parser to parse json data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static files
app.use(express.static(path.join(__dirname, 'public')));

// get comments
app.get('/api/comments', function(req, res) {
  Comment.find({}, function(err, comments) {
    res.json(comments);
  });
});

// add comment
app.post('/api/comments', function(req, res) {
  var newComment = new Comment(req.body);
  newComment.save(function(err) {
    if (err) throw err;
    res.json(req.body);
  });
});

// delete comment
app.delete('/api/comments/:id', function(req, res) {
  Comment.findByIdAndRemove(req.params.id, function(err, comment) {
    if (err) throw err;
    res.json(comment);
  });
});

// start server
app.listen(port, function() {
  console.log('Server started on port ' + port);
});