const TwitterApiController = require('../controllers/twitterApiController');
var router = require('express').Router();

router.route('/streaming')
  .post(TwitterApiController.streaming);

router.route('/search')
  .post(TwitterApiController.search);

module.exports = router;
