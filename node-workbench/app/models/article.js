// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  text: { type: String, required: true },
  created: { type: Date },
  updated: { type: Date }
});

ArticleSchema.virtual('date')
  .get(function () {
    return this._id.getTimestamp();
  });

mongoose.model('Article', ArticleSchema);

