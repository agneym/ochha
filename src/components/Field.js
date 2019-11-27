import React from "react";
import classnames from "classnames";
import { ErrorMessage } from "formik";

function CustomField({ id, label, error, field, ...rest }) {
  return (
    <div className="uk-margin">
      <label className="uk-form-label" htmlFor={id}>
        {label}
      </label>
      <div className="uk-form-controls">
        <input
          className={classnames("uk-input", {
            "uk-form-danger": !!error,
            "uk-form-success": !error,
          })}
          id={id}
          aria-describedby={`error-${id}`}
          {...field}
          {...rest}
        />
      </div>
      {error && (
        <span className="uk-text-meta" aria-describedby={`error-${id}`}>
          <ErrorMessage name={field.name} />
        </span>
      )}
    </div>
  );
}

export default CustomField;
