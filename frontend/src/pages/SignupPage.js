import React, { useState } from 'react';
import ContainerView from '../components/ContainerView';
import InputField from '../components/InputField';
import InputArea from '../components/InputArea';
import Link from '../components/Link';

const UserFields = () => {
  return (
    <React.Fragment>
      <InputField type="text" title="Name" />
      <InputField type="email" title="Email" />
      <InputField type="password" title="Password" />
    </React.Fragment>
  );
};

const ClubFields = () => {
  return (
    <React.Fragment>
      <InputField type="text" title="Club Name" />
      <InputField type="email" title="Email" />
      <InputField type="password" title="Password" />
      <InputArea placeholder="Club Description" />
    </React.Fragment>
  );
};

const SignupPage = () => {
  const [ type, setType ] = useState("student");

  return (
    <ContainerView logoOnly={true}>
    <div className="container">
    <div className="row d-flex flex-row justify-content-center align-items-center" style={{height:'60vh'}}>
        <div className="col-10 col-md-8 col-lg-5">
          <h1 className="my-3" style={{ textAlign:'center' }}>Sign Up</h1>
          <hr />
          <form>
            <div className="d-flex flex-column align-items-center">
              <h6>Account Type:</h6>
              <span>
                <label className="mr-3">
                  <input
                    type="radio"
                    name="user-type"
                    value="student"
                    className="mr-1"
                    checked={type==="student"}
                    onChange={e => setType(e.target.value)}
                  />
                  Student
                </label>
                <label>
                  <input
                    type="radio"
                    name="user-type"
                    value="club"
                    className="mr-1"
                    checked={type==="club"}
                    onChange={e => setType(e.target.value)}
                  />
                  Club
                </label>
              </span>
            </div>
            {type === "student" ? <UserFields/> : <ClubFields/>}
            <div className="d-flex flex-row justify-content-between align-items-center">
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
