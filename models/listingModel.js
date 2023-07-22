const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);


const ListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'An item must have a title!'],
    trim: true,
    maxlength: [30, 'A title must be less than 30 characters!']
  },
  slug: {
    unique: true,
    type: String,
    slug: 'title'
  },
  winner: {
    type: mongoose.Schema.ObjectId,
    ref: 'user'
  },
  description: {
    type: String,
    required: [true, 'An item must have a description!'],
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }