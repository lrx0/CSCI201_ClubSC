import React from 'react';
import ContainerView from '../components/ContainerView';
import InputField from '../components/InputField';
import Link from '../components/Link';

const LoginPage = () => {
  return (
    <ContainerView logoOnly={true}>
    <div className="container">
    <div className="row d-flex flex-row justify-content-center align-items-center" style={{height:'60vh'}}>
        <div className="col-10 col-md-8 col-lg-5">
          <h1 className="my-3" style={{ textAlign:'center' }}>Log In</h1>
          <form>
            <InputField type="email" title="Email" />
            <InputField type="password" title="Password" />
            <div className="d-flex flex-row justify-content-between align-items-center">
              <Link className="mr-auto ml-1" href="/signup">
                <span className="hide-mobile">Don't have an account?</span>
                <span className="show-mobile">Sign Up</span>
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

export default LoginPage;
