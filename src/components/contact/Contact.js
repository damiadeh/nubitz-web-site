import React, { useState } from "react";
import Button from "../primary-button/Button";
import SectionText from "../section_text/SectionText";
import Styles from "./contact.module.scss";

const contactInfo = {
  items: [
    {
      icon: "/assets/home/section_seven/phone.svg",
      title: "Phone Number",
      content: "(+000) 456-45-764",
    },
    {
      icon: "/assets/home/section_seven/email.svg",
      title: "Email Address",
      content: "nubitz@gmail.com",
    },
    {
      icon: "/assets/home/section_seven/location.svg",
      title: "Location",
      content: "is simply dummy text",
    },
  ],
};

const Contact = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [companyname, setCompanyName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullname,
      email,
      phonenumber,
      companyname,
      message,
    };

    console.log(data);
  };
  
  return (
    <div className={Styles.container} id="contact">
      {/* <div className={Styles.contactInfoContainer}>
        {contactInfo.items.map((item) => (
          <div className={Styles.contact} key={item.title}>
            <img src={item.icon} alt={item.title} />
            <div>
              <p className={Styles.contact_title}>{item.title}</p>
              <p className={Styles.contact_content}>{item.content}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className={Styles.hero}>
        <p className={Styles.welcome}>Start your project with us now</p>
        <h2 className={Styles.title}>
          Let’s build the greatest experience for your customers
        </h2>
        {/* <p className={Styles.subtext}>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry.
        </p> */}
        <p className={Styles.email}>
          Email us at <span>nubitz@gmail.com</span>
        </p>
        <p className={Styles.phone}>
          Or call <span>(+000) 456-45-764</span>
        </p>
      </div>
      <div className={Styles.formContainer}>
        {/* <SectionText
          width="550px"
          textColor="white"
          secondary
          title="we solve problems related"
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
        /> */}
        <form className={Styles.form} onClick={handleSubmit}>
          <div className={Styles.form_wrapper}>
            <input
              className={Styles.input}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              value={fullname}
            />
            <input
              className={Styles.input}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              value={email}
            />
          </div>
          <div className={Styles.form_wrapper}>
            <input
              className={Styles.input}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Phone Number"
              value={phonenumber}
            />
            <input
              className={Styles.input}
              onChange={(e) => setCompanyName(e.target.value)}
              type="text"
              placeholder="Company's Name"
              value={companyname}
            />
          </div>
          <textarea
            className={Styles.textarea}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="Message"
            value={message}
          />
          <div className={Styles.checkbox}>
            <div>
              <span className={Styles.check}></span>
              <p className={Styles.checkText}>
                Yes, I would like to recieve news {"&"} update
              </p>
            </div>
            {/* <div style={{ display: "flex", alignItems: "center" }}>
              <img src="/assets/contact/attach.svg" alt="attach" />
              <p>Attach File</p>
            </div> */}
          </div>
          <div className={Styles.buttonWrapper}>
            <button className={Styles.submit} type="submit">
              Submit
            </button>
            <button className={Styles.survey}>
              Try our interactive survey instead
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
