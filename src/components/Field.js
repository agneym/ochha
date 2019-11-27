import React from "react";

function Field({ id, label, ...rest }) {
  return (
    <div className="uk-margin">
      <label className="uk-form-label" htmlFor={id}>
        {label}
      </label>
      <div className="uk-form-controls">
        <input className="uk-input" id={id} {...rest} />
      </div>
    </div>
  );
}

export default Field;
