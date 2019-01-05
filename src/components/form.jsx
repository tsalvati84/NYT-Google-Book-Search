import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getBooks}>
      <input
        className="form_input"
        type="text"
        name="formSearch"
        placeholder="hardcover-fiction (must include hyphens)"
      />
      <button className="form_button">Search</button>
   
    </form>
  );
};

export default Form;