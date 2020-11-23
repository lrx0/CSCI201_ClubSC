import  '../stylesheets/master.css';
import  '../stylesheets/InputField.css';
import React from 'react';

const InputField = ({ type, title, onChange, className }) => {
  return (
    <div
    className={"form-group input-field px-3 d-flex flex-row align-items-center" + className}>
      <input
        type={type}
        placeholder={title}
        onChange={e => { onChange(e.target.value) }}
      />
    </div>
  );
};

export default InputField;
