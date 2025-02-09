import React, { useState } from "react";
import axios from "axios";
// import {toast} from "react-hot-toast";
import {toast} from "react-toastify"

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        console.log(res.data.message);
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
        .catch((error) => {
          const errorMsg = error.response?.data?.message || "An error occurred. Please try again.";
          toast.error(errorMsg);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p> Anywhere , Anytime , Any City</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +91-977****039</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>yuvithakur1311@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT US </h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Leave the Message here for the Event.."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;