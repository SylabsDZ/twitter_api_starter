const Twitter = require('twitter');
const config = require('../config');


var client = new Twitter({
  consumer_key: config.TWITTER_CONSUMER_KEY,
  consumer_secret: config.TWITTER_CONSUMER_SECRET,
  access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET
});


exports.streaming = function(req, res, next, params) {

}

exports.search = function(req, res, next, params) {
  var q = req.body.q;
  if (!q) { return res.status(400).json({error: "q is required"}); };
  var geocode = req.body.geocode || params.geocode;
  client.get('search/tweets', {q: q, geocode: geocode}, function(error, tweets, response) {
    if (error) {
      return res.status(422).json(error);
    }
    return res.json(tweets);
  });
}
