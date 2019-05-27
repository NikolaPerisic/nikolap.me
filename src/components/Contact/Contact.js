import React, { useState } from "react";
import "../../scss/Contact.scss";
import Footer from "../Footer/Footer";
import Form from "./FormItems/Form/Form";
import TextArea from "./FormItems/TextArea/TextArea";
import Card from "./FormItems/Card/Card";
import TextInput from "./FormItems/TextInput/TextInput";
import Button from "./FormItems/Button/Button";

const Contact = () => {
  const [data, setData] = useState({
    name: {
      name: "name",
      label: "Name",
      value: "",
      focus: false
    },
    email: {
      name: "email",
      label: "Email",
      value: "",
      focus: false
    },
    message: {
      name: "message",
      label: "Message",
      value: "",
      focus: false
    }
  });
  const handleFocus = e => {
    const name = e.target.name;
    const state = Object.assign({}, data[name]);
    state.focus = true;
    setData({
      ...data,
      [name]: state
    });
    console.log(data);
  };
  const handleBlur = e => {
    const name = e.target.name;
    const state = Object.assign({}, data[name]);
    state.focus = false;
    setData({
      ...data,
      [name]: state
    });
    console.log(data);
  };
  const handleChange = e => {
    const name = e.target.name;
    const state = Object.assign({}, data[name]);
    state.value = e.target.value;
    setData({
      ...data,
      [name]: state
    });
    console.log(data);
  };
  return (
    <div className="contact-page">
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">How to reach me...</h2>
        <div className="form-wrapper">
          <Card>
            <h3>Send me a message</h3>

            <Form>
              <TextInput
                {...data.name}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <TextInput
                {...data.email}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <TextArea
                {...data.message}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Button>Send</Button>
            </Form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
