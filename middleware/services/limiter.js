const ratelimt = require("express-rate-limit");

const limiterConfig = ratelimt({
  windows: 10 * 60 * 1000, // 10 minutes
  limit: 4, // 4time try  to login
  standardHeaders: false,
  legacyHeaders: false,
  handler: function (req, res, next) {
    res
      .status(429)
      .send(
        '<h1 class="bg-red-600 text-3xl text-black">Too many requests - please try again later.</h1>'
      );
  },
});
module.exports = limiterConfig;
