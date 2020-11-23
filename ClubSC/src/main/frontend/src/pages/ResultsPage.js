import React from 'react';
import Faker from 'faker';
import SearchResult from '../components/SearchResult';
import ResultContainer from '../components/ResultContainer';
import ContainerView from '../components/ContainerView';

const ResultsPage = ({ results }) => {

  const renderedResults = results.map((result) => {
    return (
      <SearchResult
        title={result.username}
        text={result.desc}
      />
    );
  });

  return (
    <ContainerView search={true}>
      <div className="container">
      <p className="my-3" style={{textAlign:'center'}}>11 results found</p>
      <ResultContainer>
        {renderedResults}
      </ResultContainer>
      </div>
    </ContainerView>
  );
};

export default ResultsPage;
