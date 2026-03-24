function buttonPress() {
  console.log("Button has been pressed!");
}

const Button = (props) => {
  return (
    <>
      <div>
        <button className="button" onClick={buttonPress} type="submit">
          {props.onClick}
        </button>
      </div>
    </>
  );
};

export default Button;
