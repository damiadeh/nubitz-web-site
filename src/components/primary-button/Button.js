import Styles from "./button.module.scss";

const Button = ({ text, backgroundColor, textColor, primary }) => {
  let useStyle = {
    backgroundColor: "#fff",
    color: "#1E396E",
  };

  if (!primary) {
    useStyle = {
      backgroundColor: `${backgroundColor}`,
      color: `${textColor}`,
    };
  }

  return (
    <>
      <button style={useStyle} className={Styles.button}>
        {text}
      </button>
    </>
  );
};

export default Button;
