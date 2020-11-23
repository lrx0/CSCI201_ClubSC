import  '../stylesheets/master.css';
import  '../stylesheets/InputArea.css';
import React from 'react';

const InputArea = ({ placeholder, className, onChange, value }) => {
  return (
    <div
    className={"form-group input-area px-3 py-2 d-flex flex-row align-items-center" + className}>
      <textarea value={value} placeholder={placeholder} onChange={e => { onChange(e.target.value) }}/>
    </div>
  );
};

export default InputArea;
