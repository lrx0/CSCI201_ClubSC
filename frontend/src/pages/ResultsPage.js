import React from 'react';
import Faker from 'faker';
import SearchResult from '../components/SearchResult';
import ResultContainer from '../components/ResultContainer';
import ContainerView from '../components/ContainerView';

const ResultsPage = ({ results }) => {

  const renderedResults = results.map((result) => {
    return (
      <SearchResult
        
      />
    );
  });

  return (
    <ContainerView search={true}>
      <div className="container">
      <p className="my-3" style={{textAlign:'center'}}>11 results found</p>
      <ResultContainer>
      <SearchResult
        title="Scope"
        text="I'm baby hell of helvetica cray ugh, fashion axe kombucha taxidermy flexitarian. Narwhal literally gochujang, 8-bit succulents cloud bread DIY scenester portland cornhole williamsburg before they sold out humblebrag. Pop-up VHS crucifix deep v pork belly forage slow-carb, raw denim tousled roof party man bun."
      />
      <SearchResult
        title="Novus Think Tank"
        text="Hot chicken health goth DIY prism synth, meditation banjo leggings snackwave poke hell of pickled farm-to-table. Helvetica vape blog paleo. Farm-to-table man braid shaman tilde etsy chia leggings literally YOLO sriracha thundercats blog tousled."
      />
      <SearchResult
        title="BreakThrough Hip Hop"
        text="Swag marfa sustainable intelligentsia helvetica street art gentrify unicorn blue bottle leggings. Kinfolk yuccie drinking vinegar taxidermy mixtape pitchfork."
      />
      <SearchResult
        title="LACI"
        text="Wayfarers truffaut slow-carb gentrify, fam bespoke af. Deep v organic four loko, chia DIY try-hard hella fanny pack yuccie. Hashtag ramps gochujang 8-bit cronut photo booth mlkshk readymade chicharrones. Pug DIY gentrify plaid dreamcatcher jean shorts unicorn blog slow-carb twee."
      />
      <SearchResult
        title="AIM"
        text="Cornhole ugh mumblecore coloring book 3 wolf moon pop-up woke schlitz. La croix edison bulb four dollar toast messenger bag chillwave small batch, literally keffiyeh man braid sartorial roof party kombucha umami."
      />
        <SearchResult
          title="WYSE"
          text="I'm baby hell of helvetica cray ugh, fashion axe kombucha taxidermy flexitarian. Narwhal literally gochujang, 8-bit succulents cloud bread DIY scenester portland cornhole williamsburg before they sold out humblebrag. Pop-up VHS crucifix deep v pork belly forage slow-carb, raw denim tousled roof party man bun."
        />
        <SearchResult
          title="CAIS++"
          text="Hot chicken health goth DIY prism synth, meditation banjo leggings snackwave poke hell of pickled farm-to-table. Helvetica vape blog paleo. Farm-to-table man braid shaman tilde etsy chia leggings literally YOLO sriracha thundercats blog tousled."
        />
        <SearchResult
          title="Code The Change"
          text="Swag marfa sustainable intelligentsia helvetica street art gentrify unicorn blue bottle leggings. Kinfolk yuccie drinking vinegar taxidermy mixtape pitchfork."
        />
        <SearchResult
          title="Environmental Student Assembly"
          text="Wayfarers truffaut slow-carb gentrify, fam bespoke af. Deep v organic four loko, chia DIY try-hard hella fanny pack yuccie. Hashtag ramps gochujang 8-bit cronut photo booth mlkshk readymade chicharrones. Pug DIY gentrify plaid dreamcatcher jean shorts unicorn blog slow-carb twee."
        />
        <SearchResult
          title="SoCal Vocals"
          text="Cornhole ugh mumblecore coloring book 3 wolf moon pop-up woke schlitz. La croix edison bulb four dollar toast messenger bag chillwave small batch, literally keffiyeh man braid sartorial roof party kombucha umami."
        />
        <SearchResult
          title="Kinky Trojans"
          text="Cornhole ugh mumblecore coloring book 3 wolf moon pop-up woke schlitz. La croix edison bulb four dollar toast messenger bag chillwave small batch, literally keffiyeh man braid sartorial roof party kombucha umami."
        />
      </ResultContainer>
      </div>
    </ContainerView>
  );
};

export default ResultsPage;
