const mongoose = require('mongoose');
const slugify = require('slugify');

const gardenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'a garden must have a name'],
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  imageCover: {
    type: String,
    required: [true, 'a garden must have a cover image'],
  },
  images: [String],
});

gardenSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Garden = mongoose.model('Garden', gardenSchema);

module.exports = Garden;
