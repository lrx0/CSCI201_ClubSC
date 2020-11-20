import  '../stylesheets/master.css';
import  '../stylesheets/InputArea.css';
import React from 'react';

const InputArea = ({ placeholder }) => {
  return (
    <div className="form-group input-area my-4 px-3 d-flex flex-row align-items-center">
      <textarea placeholder={placeholder}/>
    </div>
  );
};

export default InputArea;
