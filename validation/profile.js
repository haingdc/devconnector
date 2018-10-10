const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  /* First, Because some fields may be not provided,
   * We should set all fields to `empty string`.
   * So Validator's methods need these.
  */
  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  /* HANDLE */
  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }
  if (
    data.handle.length > 0 &&
    !Validator.isLength(data.handle, {
      min: 2,
      max: 40,
    })
  ) {
    errors.handle = "Handle needs to between 2 and 40 character";
  }

  /* STATUS */
  if (Validator.isEmpty(data.status)) {
    errors.status = "Status field is required";
  }

  /* SKILLS */
  if (Validator.isEmpty(data.skills)) {
    errors.skills = "Skills field is required";
  }

  /* WEBSITE Not Required */
  if (!isEmpty(data.website)) {
    if (!Validator.isURL(data.website)) {
      errors.website = "Not a valid URL";
    }
  }

  /* SOCIALS Not Required */
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
