import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  // const [isValid, setIsValid] = useState(false);
  const [nameIsTyped, setNameIsTyped] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const correctedInput = !enteredNameIsValid && nameIsTyped;

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const inputBlurHandler = () => {
    setNameIsTyped(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setNameIsTyped(true);

    if (!enteredNameIsValid) {
      return;
    }

    setEnteredName("");
    setNameIsTyped(false);
  };

  const formClass = correctedInput ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
        />
        {correctedInput && <p className="error-text">Name cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
