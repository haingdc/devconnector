import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const SelectFieldGroup = ({ name, value, error, info, options, onChange }) => {
  const selectOptions = options.map(o => (
    <option key={o.label} value={o.value}>
      {o.label}
    </option>
  ));

  return (
    <div className="form-group">
      <select
        className={classnames("form-control form-control-lg", {
          "is-invalid": error,
        })}
        name={name}
        value={value}
        onChange={onChange}
      >
        {selectOptions}
      </select>
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

const REQUIRED = PropTypes.string.isRequired,
  OPTIONAL = PropTypes.string;

SelectFieldGroup.propTypes = {
  name: REQUIRED,
  value: REQUIRED,
  info: OPTIONAL,
  error: OPTIONAL,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectFieldGroup;
