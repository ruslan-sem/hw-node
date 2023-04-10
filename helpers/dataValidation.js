const Joi = require("joi");

function dataValidation(data) {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
  });
  return schema.validate(data);
}

module.exports = dataValidation;
