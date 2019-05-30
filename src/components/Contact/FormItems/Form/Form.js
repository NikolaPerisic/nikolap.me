import React from "react";

const Form = props => {
  return (
    <form className="form" onSubmit={props.formSubmit}>
      {props.children}
    </form>
  );
};

export default Form;
