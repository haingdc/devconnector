const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  /* First, Because some fields may be not provided,
   * We should set all fields to `empty string`.
   * So Validator's methods need these.
  */
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  /* NAME */
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (
    data.name.length > 0 &&
    !Validator.isLength(data.name, {
      min: 2,
      max: 30,
    })
  ) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  /* EMAIL */
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email field is invalid";
  }

  /* PASSWORD */
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (data.password.length > 0 &&
    !Validator.isLength(data.password, {
      min: 6,
      max: 30,
    })
  ) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  /* CONFIRM PASSWORD */
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password field is required";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
