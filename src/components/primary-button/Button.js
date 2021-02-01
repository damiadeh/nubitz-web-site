import Link from "next/link";

import Styles from "./button.module.scss";

const Button = ({
  text,
  backgroundColor,
  textColor,
  primary,
  width,
  route,
  onClick,
}) => {
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
      {route ? (
        <Link href={`${route}`}>
          <button style={useStyle} className={Styles.button} onClick={onClick}>
            {text}
          </button>
        </Link>
      ) : (
        <button style={useStyle} className={Styles.button} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
