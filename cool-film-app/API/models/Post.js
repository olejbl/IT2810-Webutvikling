const mongoose = require('mongoose');

// Definerer hva som må sendes inn til databasen på en post request sammen med hva som er required/ikke
const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  date: Number
})


module.exports = mongoose.model('Posts', PostSchema);
