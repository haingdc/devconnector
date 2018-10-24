import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled,
}) => {
  return (
    <div className="form-group">
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

const REQUIRED = PropTypes.string.isRequired,
  OPTIONAL = PropTypes.string;

TextFieldGroup.propTypes = {
  name: REQUIRED,
  value: REQUIRED,
  type: REQUIRED,
  placeholder: OPTIONAL,
  info: OPTIONAL,
  error: OPTIONAL,
  disabled: OPTIONAL,
  onChange: PropTypes.func.isRequired,
};

TextFieldGroup.defaultProps = {
  type: "text",
};

export default TextFieldGroup;
