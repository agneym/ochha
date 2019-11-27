import React from "react";

function CustomField({ id, label, field, ...rest }) {
  return (
    <div className="uk-margin">
      <label className="uk-form-label" htmlFor={id}>
        {label}
      </label>
      <div className="uk-form-controls">
        <input className="uk-input" id={id} {...field} {...rest} />
      </div>
    </div>
  );
}

export default CustomField;
