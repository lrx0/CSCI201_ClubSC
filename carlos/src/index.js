import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import ContainerView from './ContainerView';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import ResultContainer from './ResultContainer';
import InputField from './InputField';

// user={{ name: Faker.name.findName(), img: Faker.image.avatar() }}

const App = () => {
  return (
    <ContainerView>
      <div className="container">
        <div className="row d-flex flex-row justify-content-center">
          <img className="my-5" width="225px" height="150px" src="clubsc_big.png" />
        </div>
        <div className="row d-flex flex-column align-items-center">
          <div className="col-8">
            <SearchBar/>
          </div>
          <button className="btn btn-light mt-5" type="submit">Search Clubs</button>
        </div>
      </div>
    </ContainerView>
  );
};

const ResultsPage = () => {
  return (
    <ContainerView search={true}>
      <div className="container">
      <p className="my-3" style={{textAlign:'center'}}>40 results found</p>
      <ResultContainer>
      <SearchResult
        title="Scope"
        text="I'm baby hell of helvetica cray ugh, fashion axe kombucha taxidermy flexitarian. Narwhal literally gochujang, 8-bit succulents cloud bread DIY scenester portland cornhole williamsburg before they sold out humblebrag. Pop-up VHS crucifix deep v pork belly forage slow-carb, raw denim tousled roof party man bun."
        img={Faker.image.image()}
      />
      <SearchResult
        title="Novus Think Tank"
        text="Hot chicken health goth DIY prism synth, meditation banjo leggings snackwave poke hell of pickled farm-to-table. Helvetica vape blog paleo. Farm-to-table man braid shaman tilde etsy chia leggings literally YOLO sriracha thundercats blog tousled."
        img={Faker.image.image()}
      />
      <SearchResult
        title="BreakThrough Hip Hop"
        text="Swag marfa sustainable intelligentsia helvetica street art gentrify unicorn blue bottle leggings. Kinfolk yuccie drinking vinegar taxidermy mixtape pitchfork."
        img={Faker.image.image()}
      />
      <SearchResult
        title="LACI"
        text="Wayfarers truffaut slow-carb gentrify, fam bespoke af. Deep v organic four loko, chia DIY try-hard hella fanny pack yuccie. Hashtag ramps gochujang 8-bit cronut photo booth mlkshk readymade chicharrones. Pug DIY gentrify plaid dreamcatcher jean shorts unicorn blog slow-carb twee."
        img={Faker.image.image()}
      />
      <SearchResult
        title="AIM"
        text="Cornhole ugh mumblecore coloring book 3 wolf moon pop-up woke schlitz. La croix edison bulb four dollar toast messenger bag chillwave small batch, literally keffiyeh man braid sartorial roof party kombucha umami."
        img={Faker.image.image()}
      />
        <SearchResult
          title="WYSE"
          text="I'm baby hell of helvetica cray ugh, fashion axe kombucha taxidermy flexitarian. Narwhal literally gochujang, 8-bit succulents cloud bread DIY scenester portland cornhole williamsburg before they sold out humblebrag. Pop-up VHS crucifix deep v pork belly forage slow-carb, raw denim tousled roof party man bun."
          img={Faker.image.image()}
        />
        <SearchResult
          title="CAIS++"
          text="Hot chicken health goth DIY prism synth, meditation banjo leggings snackwave poke hell of pickled farm-to-table. Helvetica vape blog paleo. Farm-to-table man braid shaman tilde etsy chia leggings literally YOLO sriracha thundercats blog tousled."
          img={Faker.image.image()}
        />
        <SearchResult
          title="Code The Change"
          text="Swag marfa sustainable intelligentsia helvetica street art gentrify unicorn blue bottle leggings. Kinfolk yuccie drinking vinegar taxidermy mixtape pitchfork."
          img={Faker.image.image()}
        />
        <SearchResult
          title="Environmental Student Assembly"
          text="Wayfarers truffaut slow-carb gentrify, fam bespoke af. Deep v organic four loko, chia DIY try-hard hella fanny pack yuccie. Hashtag ramps gochujang 8-bit cronut photo booth mlkshk readymade chicharrones. Pug DIY gentrify plaid dreamcatcher jean shorts unicorn blog slow-carb twee."
          img={Faker.image.image()}
        />
        <SearchResult
          title="SoCal Vocals"
          text="Cornhole ugh mumblecore coloring book 3 wolf moon pop-up woke schlitz. La croix edison bulb four dollar toast messenger bag chillwave small batch, literally keffiyeh man braid sartorial roof party kombucha umami."
          img={Faker.image.image()}
        />
        <SearchResult
          title="Kinky Trojans"
          text="Cornhole ugh mumblecore coloring book 3 wolf moon pop-up woke schlitz. La croix edison bulb four dollar toast messenger bag chillwave small batch, literally keffiyeh man braid sartorial roof party kombucha umami."
          img={Faker.image.image()}
        />
      </ResultContainer>
      </div>
    </ContainerView>
  );
};

const Login = () => {
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
              <a className="mr-auto ml-1" href="#">
                <span className="hide-mobile">Don't have an account?</span>
                <span className="show-mobile">Sign Up</span>
              </a>
              <button className="btn btn-primary ml-auto mr-1" type="Submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </ContainerView>
  );
}

//uncomment to render landing page
// ReactDOM.render(<App />, document.querySelector('#root'))

//uncomment to render results page
// ReactDOM.render(<ResultsPage />, document.querySelector('#root'))

// uncomment to render login page
ReactDOM.render(<Login />, document.querySelector('#root'))
