const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.js')

//HENTER UT ALT AV movies
router.get('/', async (req, res) => {
try{
const movies = await Movie.find();
res.json(movies)
}
catch(err){
  res.json({message: err});
}
});

router.get('/spesific', (req, res) => {
res.send('We are on Spesific');
});
// SENDER INN movies
router.post('/', (req,res) => {
const movie = new Movie({
  title: req.body.title,
  poster_path: req.body.poster_path,
  release_date: req.body.release_date,
  antall_scorere: req.body.antall_scorere,
  score: req.body.score,
  overview: req.body.overview,
  genre: req.body.genre

})
movie.save()
.then(data => {
res.json(data);
})
.catch(err =>{
  res.json({message: err});
})

});

module.exports = router
