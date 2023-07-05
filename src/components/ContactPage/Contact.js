import React, { useRef } from "react";
import "./contact.css";

const ContactForm = () => {
  const userNameRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();
  const contactRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      UserName: userNameRef.current.value,
      Email: emailRef.current.value,
      Comments: commentRef.current.value,
      Password: passwordRef.current.value,
      ContactNumber: contactRef.current.value,
    };
    console.log(data);
    alert("Thanks for giving your valuable feedback");
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler} className="form">
        <div className="form-group">
          <label className="label">UserName :</label>
          <input type="text" ref={userNameRef} className="input" />
        </div>
        <div className="form-group">
          <label className="label">Email :</label>
          <input type="email" ref={emailRef} className="input" />
        </div>
        <div className="form-group">
          <label className="label">Contact Number :</label>
          <input type="number" ref={contactRef} className="input" />
        </div>
        <div className="form-group">
          <label className="label">Password :</label>
          <input type="password" ref={passwordRef} className="input" />
        </div>
        <div className="form-group">
          <label className="label">Comments :</label>
          <input type="text" ref={commentRef} className="input" />
        </div>
        <div className="form-group">
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
