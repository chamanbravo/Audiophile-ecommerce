import React from "react";
import { ErrorMessage, useField } from "formik";

function TextField({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="text-field">
      <label htmlFor={field.name}>{label}</label>
      <input {...field} {...props} />
      <div className="err-msg">
        <ErrorMessage name={field.name} />
      </div>
    </div>
  );
}

export default TextField;
