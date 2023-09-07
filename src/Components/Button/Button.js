import btnStyling from "./Button.module.css";

const Button = ({ name }) => {
  return (
    <div>
      <button className={btnStyling.btnStyle} type="">
        {name}
      </button>
    </div>
  );
};
export default Button;
