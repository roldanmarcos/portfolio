import './Button.css';

const Button = ({ text, link, variant = "theme" }) => {
  return (
    <button
      className={`button ${variant === "fixed" ? "buttonFixed" : ""}`}
      onClick={() => window.open(link, "_blank")}
    >
      {text}
    </button>
  );
};

export default Button;