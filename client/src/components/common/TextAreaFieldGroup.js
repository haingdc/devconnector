import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextAreaFieldGroup = ({ name, placeholder, value, error, info, onChange }) => {
  return (
    <div className="form-group">
      <textarea
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

const REQUIRED = PropTypes.string.isRequired,
  OPTIONAL = PropTypes.string;

TextAreaFieldGroup.propTypes = {
  name: REQUIRED,
  value: REQUIRED,
  placeholder: OPTIONAL,
  info: OPTIONAL,
  error: OPTIONAL,
  onChange: PropTypes.func.isRequired,
};

export default TextAreaFieldGroup;
