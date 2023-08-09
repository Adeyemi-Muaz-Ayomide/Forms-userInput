import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [nameIsTyped, setNameIsTyped] = useState(false);

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const inputBlurHandler = () => {
    setNameIsTyped(true)
    if (enteredName.trim() === '') {
      setIsValid(true);
    }
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setNameIsTyped(true)
    if (enteredName.trim() === '') {
      setIsValid(true);
      return;
    }

    setIsValid(false);
    setEnteredName("");
  };
  const correctedInput = isValid && nameIsTyped;
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
