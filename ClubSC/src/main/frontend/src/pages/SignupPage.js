import React, { useState } from 'react';
import axios from 'axios';
import ContainerView from '../components/ContainerView';
import InputField from '../components/InputField';
import InputArea from '../components/InputArea';
import Link from '../components/Link';

const validateEmail = (email) => {
  return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email));
}

const UserFields = ({ username, email, password, setUsername, setEmail, setPassword }) => {
  const errClasses = "text-danger my-0 py-0"

  return (
    <React.Fragment>
      <div className="my-4" style={{ textAlign:'center'}}>
        <InputField
          className="pb-0 mb-0"
          type="text"
          title="Name"
          onChange={setUsername}
        />
        {username ? null : <p className={errClasses}>Please enter a username.</p>}
        {username.length>20 ? <p className={errClasses}>Your username is too long</p> : null}
      </div>

      <div className="my-4" style={{ textAlign:'center'}}>
        <InputField
          className="pb-0 mb-0"
          type="email"
          title="Email"
          onChange={setEmail}
        />
        {email && validateEmail(email) ?
        null : <p className={errClasses}>Please enter a valid email.</p>}
        {email.length>50 ? <p className={errClasses}>Your email is too long</p> : null}
      </div>

      <div className="my-4" style={{ textAlign:'center'}}>
        <InputField
          className="pb-0 mb-0"
          type="password"
          title="Password"
          onChange={setPassword}
        />
        {password.length >= 6 && password.length <= 120?
        null : <p className={errClasses}>Password must be 6 to 120 characters.</p>}
        {/\d/.test(password) ? null : <p className={errClasses}>Password must contain a number.</p>}
      </div>
    </React.Fragment>
  );
};

const ClubFields = ({ username, email, password, description, setUsername, setEmail, setPassword, setDescription }) => {
  const errClasses = "text-danger my-0 py-0"

  return (
    <React.Fragment>
      <div className="my-4" style={{ textAlign:'center'}}>
        <InputField
          className="pb-0 mb-0"
          type="text"
          title="Club Name"
          onChange={setUsername}
        />
        {username ? null : <p className={errClasses}>Please enter a club name.</p>}
        {username.length>20 ? <p className={errClasses}>Your club name is too long</p> : null}
      </div>

      <div className="my-4" style={{ textAlign:'center'}}>
        <InputField
          className="pb-0 mb-0"
          type="email"
          title="Email"
          onChange={setEmail}
        />
        {email && validateEmail(email) ?
        null : <p className={errClasses}>Please enter a valid email.</p>}
        {email.length>50 ? <p className={errClasses}>Your email is too long</p> : null}
      </div>

      <div className="my-4" style={{ textAlign:'center'}}>
        <InputField
          className="pb-0 mb-0"
          type="password"
          title="Password"
          onChange={setPassword}
        />
        {password.length >= 6 && password.length <= 120?
        null : <p className={errClasses}>Password must be 6 to 120 characters.</p>}
        {/\d/.test(password) ? null : <p className={errClasses}>Password must contain a number.</p>}
      </div>

      <div className="my-4" style={{ textAlign:'center'}}>
        <InputArea
          className="pb-0 mb-0"
          placeholder="Club Description"
          onChange={setDescription}
        />
        {description ? null : <p className={errClasses}>Please enter a description.</p>}
      </div>
    </React.Fragment>
  );
};

const SignupPage = ({ setUser }) => {
  const [ role, setRole ] = useState("student");
  const [ username, setUsername ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ errmsg, setErrMsg ] = useState('');

  const handleSignup = (e) => {
    const signup = async (user, email, pw, desc, r) => {
      try {
        const { message } = await axios.post('http://localhost:8080/api/auth/signup',
          {
            username: user,
            email: email,
            password: pw,
            description: desc,
            role: [r]
          }
        )

        const { data } = await axios.post('http://localhost:8080/api/auth/signin',
          {
            username: user,
            password: pw
          }
        )

        localStorage.setItem("user", JSON.stringify(data));
        setUser(JSON.parse(localStorage.getItem('user')));

        return true;
      } catch (error) {
        setErrMsg(error.message);
        return false;
      }
    }

    e.preventDefault();

    if(!username || username.length > 20){
      setErrMsg("Please check your username");
    }
    else if(!email || !validateEmail(email) || email.length > 50){
      setErrMsg("Please check your email");
    }
    else if(password.length < 6 || password.length > 120 || !(/\d/.test(password))){
      setErrMsg("Please check your password");
    }
    else if(role === "club" && !description){
      setErrMsg("Please check your description");
    }
    else{
      if(signup(username, email, password, description, role)){
        if(role === "student"){
          window.history.pushState({}, '', `/userdash`);
        } else{
          window.history.pushState({}, '', `/clubdash`);
        }

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
      }
    }
  };

  return (
    <ContainerView logoOnly={true} user={undefined}>
    <div className="container">
    <div className="row d-flex flex-row justify-content-center align-items-center" style={{height:'60vh'}}>
        <div className="col-10 col-md-8 col-lg-5">
          <h1 className="my-3" style={{ textAlign:'center' }}>Sign Up</h1>
          <hr />
          {errmsg ?
            <p className="text-danger" style={{ textAlign:'center' }}>{errmsg}</p>
            : null}
          <form onSubmit={handleSignup}>
            <div className="d-flex flex-column align-items-center">
              <h6>Account Type:</h6>
              <span>
                <label className="mr-3">
                  <input
                    type="radio"
                    name="user-type"
                    value="student"
                    className="mr-1"
                    checked={role==="student"}
                    onChange={e => setRole(e.target.value)}
                  />
                  Student
                </label>
                <label>
                  <input
                    type="radio"
                    name="user-type"
                    value="club"
                    className="mr-1"
                    checked={role==="club"}
                    onChange={e => setRole(e.target.value)}
                  />
                  Club
                </label>
              </span>
            </div>
            {role === "student" ?
            <UserFields
              username={username}
              email={email}
              password={password}
              setUsername={setUsername}
              setEmail={setEmail}
              setPassword={setPassword}
            /> :
            <ClubFields
              username={username}
              email={email}
              password={password}
              description={description}
              setUsername={setUsername}
              setPassword={setPassword}
              setEmail={setEmail}
              setDescription={setDescription}
            />}
            <div className="d-flex flex-row justify-content-between align-items-center mb-3">
              <Link className="mr-auto ml-1" href="/login">
                <span className="hide-mobile">Already have an account?</span>
                <span className="show-mobile">Sign In</span>
              </Link>
              <button className="btn btn-primary ml-auto mr-1" type="Submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </ContainerView>
  );
};

export default SignupPage;
