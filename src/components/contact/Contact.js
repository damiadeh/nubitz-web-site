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
      <div>
        {contactInfo.items.map((item) => (
          <div className={Styles.contact}>
            <img src={item.icon} alt={item.title} />
            <div>
              <p className={Styles.contact_title}>{item.title}</p>
              <p className={Styles.contact_content}>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <SectionText
          width="550px"
          textColor="white"
          secondary
          title="we solve problems related"
          description="is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the"
        />
        <form className={Styles.form}>
          <div>
            <input
              className={Styles.input}
              type="text"
              placeholder="Full Name"
            />
            <input className={Styles.input} type="text" placeholder="Email" />
          </div>
          <div>
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
          <Button text="Submit" primary width="150px" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
