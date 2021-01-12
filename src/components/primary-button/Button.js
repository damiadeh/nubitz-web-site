import Styles from "./button.module.scss";

const Button = ({ text, backgroundColor, textColor, primary, width }) => {
  let useStyle = {
    backgroundColor: "#fff",
    color: "#1E396E",
    width: `${width}`,
  };

  if (!primary) {
    useStyle = {
      backgroundColor: `${backgroundColor}`,
      color: `${textColor}`,
      width: `${width}`,
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
