// Create Web Server
// npm install express --save
var express = require('express');
// npm install body-parser --save
var bodyParser = require('body-parser');
// npm install cors --save
var cors = require('cors');
var app = express();
var port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Create Web Server
// npm install express --save
var express = require('express');
// npm install body-parser --save
var bodyParser = require('body-parser');
// npm install cors --save
var cors = require('cors');
var app = express();
var port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Connect to MongoDB
// npm install mongoose --save
var mongoose = require('mongoose');
// connect to MongoDB
//mongoose.connect('mongodb://localhost:27017/mean');
// connect to MongoDB Atlas - cloud based MongoDB
// npm install dotenv --save
require('dotenv').config();
mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true });
// Define Schema for MongoDB
var commentSchema = mongoose.Schema({
    name: String,
    comment: String,
    created_at: { type: Date, default: Date.now }
});
// Define Model for MongoDB
var Comment = mongoose.model('comment', commentSchema);
// Create Router
var router = express.Router();
// Read all comments
router.route('/comments').get(function (req, res) {
    Comment.find(function (err, comments) {
        if (err)
            return res.status(500).send({ error: 'database failure' });
        res.json(comments);
    });
});
// Read one comment
router.route('/comments/:comment_id').get(function (req, res) {
    Comment.findOne({ _id: req.params.comment_id }, function (err, comment) {
        if (err)
            return res.status(500).json({ error: err });
        if (!comment)
            return res.status(404).json({ error: 'comment not found' });
        res.json(comment);
    });
});
// Create comment
router.route('/comments').post(function (req, res) {
    var comment = new Comment();git add comments.js
    comment.name = req.body.name;
    comment.comment = req.body.comment;
    comment.created_at = req.body.created_at;
    comment.save;
});
