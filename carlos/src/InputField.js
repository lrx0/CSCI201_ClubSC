import './master.css';
import './InputField.css';
import React from 'react';

const InputField = (props) => {
  return (
    <div className="form-group input-field my-4 px-3 d-flex flex-row align-items-center">
      <input type={props.type} aria-describedby="emailHelp" placeholder={props.title} />
    </div>
  );
};

export default InputField;
