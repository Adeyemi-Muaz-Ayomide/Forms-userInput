import { useState } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault()

    if ( enteredName.trim().length === 0 ) {
      return;
    }

    setEnteredName('')
    console.log(enteredName)

  }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
