import React from "react";

const TextArea = props => {
  return (
    <div className="text-area">
      <label
        className={props.focus || props.value !== "" ? "label-focus" : ""}
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <textarea
        className={props.focus || props.value !== "" ? "input-focus" : ""}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default TextArea;
