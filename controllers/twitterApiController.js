const twitterApiUtil = require('../util/twitterApiUtil');

exports.streaming = function(req, res, next){
  var params = {
    limit: 25
  };
  twitterApiUtil.streaming(req, res, next, params);
}


exports.search = function(req, res, next){
  var params = {
    geocode: "31.764,2.4,500km"
  };
  twitterApiUtil.search(req, res, next, params);
}
