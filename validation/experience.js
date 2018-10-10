const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  /* First, Because some fields may be not provided,
   * We should set all fields to `empty string`.
   * So Validator's methods need these.
  */
  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  /* TITLE */
  if (Validator.isEmpty(data.title)) {
    errors.title = "Job title field is required";
  }

  /* COMPANY */
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }

  /* FROM */
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
