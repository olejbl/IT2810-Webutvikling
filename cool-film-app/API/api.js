const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Enable cors
app.use(cors());

// parses posts to be able to use
app.use(bodyParser.json());

//Import Routes

const postRoute = require('./posts/posts.js');

app.use('/posts', postRoute);

// START ROUTE

app.get('/', (req, res) => {
res.send('We are on home');
});

//Connect to DB
// Kunne skjult brukernavn:passord, men er et åpent prosjekt på en vm så ser ikke helt nødvendigheten.
mongoose.connect(
  'mongodb://user1:user1password@it2810-50.idi.ntnu.no:27017/prosjekt3',
{ useNewUrlParser: true },
 { useUnifiedTopology: true },
() => console.log('Connected to DB')
);


// Start opp serveren

app.listen(3001);
