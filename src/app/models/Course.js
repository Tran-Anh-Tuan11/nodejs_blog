const { create } = require('express-handlebars');
const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Course = new Schema({
    name: {type: String, require: true},
    description: {type: String},
    videoId: {type: String, require: true},
    image: {type: String},
    slug: { type: String, slug: 'name', unique: true }
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Course', Course)  