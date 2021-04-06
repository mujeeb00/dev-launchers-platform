import React from "react";

import { useForm, useField, splitFormProps } from "react-form";

import style from "./SelectField.module.css";

export default function SelectField(props) {
  const [field, fieldOptions, { options, ...rest }] = splitFormProps(props);

  const {
    value = "",
    setValue,
    meta: { error, isTouched }
  } = useField(field, fieldOptions);

  const handleSelectChange = e => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select
        {...rest}
        value="Select..."
        onChange={handleSelectChange}
        style={{ fontSize: "1.5rem" }}
      >
        <option disabled value="" />
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>{" "}
      {isTouched && error ? <em>{error}</em> : null}
    </div>
  );
}
