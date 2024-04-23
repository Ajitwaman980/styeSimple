const Joi = require("joi");

// Define validation schema
module.exports.ListingSchema_validation = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  location: Joi.string().required(),
  country: Joi.string().required(),
  image: Joi.string().uri().allow(''),
}).required();
module.exports.ReviewSchema_validation = Joi.object({
  Comment: Joi.string().required(),
  Rating: Joi.number().required(),
}).required();
// Export the validation schema
