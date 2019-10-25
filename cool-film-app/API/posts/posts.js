const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

//HENTER UT ALT AV POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/spesific', (req, res) => {
    res.send('We are on Spesific');
});


// SENDER INN POSTS
router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date

    })
    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err});
        })

});

module.exports = router
