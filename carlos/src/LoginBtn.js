import './master.css';
import React from 'react';

const btnConfig = {
  student: {
    label: "Student Login",
    style: "login-stu"
  },
  club: {
    label: "Club Login",
    style: "login-club"
  }
};

const LoginBtn = (props) => {
  const {label, style} = btnConfig[props.type];

  return (
    <a className="mx-5" id={style} href="#">{label}</a>
  );
};

export default LoginBtn;
