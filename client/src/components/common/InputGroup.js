import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const InputGroup = ({ name, placeholder, value, error, icon, type, onChange }) => {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <input
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        placeholder={placeholder}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

const REQUIRED = PropTypes.string.isRequired,
  OPTIONAL = PropTypes.string;

InputGroup.propTypes = {
  name: REQUIRED,
  value: REQUIRED,
  type: REQUIRED,
  placeholder: OPTIONAL,
  icon: OPTIONAL,
  error: OPTIONAL,
  onChange: PropTypes.func.isRequired,
};

InputGroup.defaultProps = {
  type: "text",
};

export default InputGroup;
