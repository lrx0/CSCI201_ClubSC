import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import ContainerView from './ContainerView';
import SearchBar from './SearchBar';

// <Navbar user={{ name: "Charles Maxwell", img: Faker.image.avatar() }}/>

// const App = () => {
//   return (
//     <ContainerView>
//       <div className="container">
//         <div className="row d-flex flex-row justify-content-center">
//           <img className="my-5" width="225px" height="150px" src="clubsc_big.png" />
//         </div>
//         <div className="row d-flex flex-column align-items-center">
//           <div className="col-8">
//             <SearchBar/>
//           </div>
//           <button className="btn btn-light mt-5" type="submit">Search Clubs</button>
//         </div>
//       </div>
//     </ContainerView>
//   );
// };

const App = () => {
  return (
    <ContainerView search={true}>
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

//uncomment to render landing page
ReactDOM.render(<App />, document.querySelector('#root'))

//uncomment to render results page
// ReactDOM.render(<ResultsPage />, document.querySelector('#root'))
