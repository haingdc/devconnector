const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  /* First, Because some fields may not be provided,
   * We should set all fields to `empty string`.
   * So Validator's methods need these.
  */
  data.text = !isEmpty(data.text) ? data.text : "";

  /* TEXT Required */
  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  } else if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300 characters";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
