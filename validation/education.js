const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  /* First, When some fields may not be provided,
   * We should set all fields to `empty string`.
   * Because Validator's methods require string to be able to check.
  */
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  /* SCHOOL Required */
  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  /* DEGREE Required */
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  /* FIELD OF STUDY Required */
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study is required";
  }

  /* FROM Required */
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
