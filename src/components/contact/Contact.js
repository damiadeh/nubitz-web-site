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
  return (
    <div className={Styles.container}>
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
        <p className={Styles.welcome}>is simply dummy text of the printing</p>
        <h2 className={Styles.title}>
          Lorem ipsum dolor sit amet, cons ectetur adip.
        </h2>
        <p className={Styles.subtext}>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry.
        </p>
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
        <form className={Styles.form}>
          <div className={Styles.form_wrapper}>
            <input
              className={Styles.input}
              type="text"
              placeholder="Full Name"
            />
            <input className={Styles.input} type="text" placeholder="Email" />
          </div>
          <div className={Styles.form_wrapper}>
            <input
              className={Styles.input}
              type="text"
              placeholder="Phone Number"
            />
            <input
              className={Styles.input}
              type="text"
              placeholder="Compnay's Name"
            />
          </div>
          <textarea
            className={Styles.textarea}
            type="text"
            placeholder="Message"
          />
          <div className={Styles.checkbox}>
            <div>
              <input type="checkbox" id="scales" name="scales" />
              <label for="scales" className={Styles.checkText}>
                Yes, i would like to recieve news {"&"} update
              </label>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
              <img src="/assets/contact/attach.svg" alt="attach" />
              <p>Attach File</p>
            </div>
          </div>
        </form>
        <div className={Styles.buttonWrapper}>
          <Button text="Submit" primary width="150px" />
          <Button
            text="Try our interactive survey instead"
            backgroundColor="#796AF2"
            textColor="#ffffff"
            width="300px"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
