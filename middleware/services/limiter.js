const ratelimt = require("express-rate-limit");
// prevetn dos attacker
const limiterConfig = ratelimt({
  windows: 10 * 60 * 1000, // 10 minutes
  limit: 100, // same ip only 100 req in 10 min 
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
