const mongoose = require('mongoose');

// Definerer hva som må sendes inn til databasen på en Movie request sammen med hva som er required/ikke
const MovieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    antall_scorere: Number,
    score: Number,
    overview: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    }

})


module.exports = mongoose.model('Movies', MovieSchema);
