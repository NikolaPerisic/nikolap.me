import React from "react";

const TextInput = props => {
  return (
    <div className="text-input">
      <label
        className={props.focus || props.value !== "" ? "label-focus" : ""}
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        className={props.focus || props.value !== "" ? "input-focus" : ""}
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default TextInput;
