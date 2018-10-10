const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEducationInput(data) {
  let errors = {};

  /* First, Because some fields may be not provided,
   * We should set all fields to `empty string`.
   * So Validator's methods need these.
  */
  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  /* SCHOOL */
  if (Validator.isEmpty(data.school)) {
    errors.school = "School field is required";
  }

  /* DEGREE */
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field is required";
  }

  /* FIELD OF STUDY */
  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study is required";
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
