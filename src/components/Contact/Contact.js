import React, { useState } from "react";
import "../../scss/Contact.scss";
import Footer from "../Footer/Footer";
import Form from "./FormItems/Form/Form";
import TextArea from "./FormItems/TextArea/TextArea";
import Card from "./FormItems/Card/Card";
import TextInput from "./FormItems/TextInput/TextInput";
import Button from "./FormItems/Button/Button";
import Modal from "./FormItems/Modal/Modal";
import axios from "axios";

const Contact = () => {
  const initialState = {
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
    },
    showModal: false
  };
  const [data, setData] = useState({ ...initialState });

  const handleFocus = e => {
    const name = e.target.name;
    const state = Object.assign({}, data[name]);
    state.focus = true;
    setData({
      ...data,
      [name]: state
    });
  };
  const handleBlur = e => {
    const name = e.target.name;
    const state = Object.assign({}, data[name]);
    state.focus = false;
    setData({
      ...data,
      [name]: state
    });
  };
  const handleChange = e => {
    const name = e.target.name;
    const state = Object.assign({}, data[name]);
    state.value = e.target.value;
    setData({
      ...data,
      [name]: state
    });
  };
  const clearForm = () => {
    setData({ ...initialState });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    if (!data.email.value || !data.message.value) {
      return null;
    }
    const contactData = {
      email: data.email.value,
      message: data.message.value,
      time: new Date().getTime()
    };
    // console.log(contactData);
    axios
      .post(process.env.REACT_APP_CLOUD_FUNCTION, contactData)
      .then(res => {
        // console.log(res);
        handleModal();
      })
      .catch(error => {
        console.log(error);
      });
  };
  const handleModal = () => {
    setData({
      ...data,
      showModal: !data.showModal
    });
  };

  let modal = data.showModal ? <Modal controlModal={clearForm} /> : null;

  return (
    <React.Fragment>
      <div className="contact-page">
        <main id="contact">
          <h1 className="lg-heading">
            Contact <span className="text-secondary">Me</span>
          </h1>
          <h2 className="sm-heading">How to reach me...</h2>
          <div className="form-wrapper">
            {modal}
            <Card>
              <h3>Send me a message</h3>
              <Form formSubmit={handleFormSubmit}>
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
                <Button type="submit">Send</Button>
              </Form>
            </Card>
          </div>
        </main>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Contact;
