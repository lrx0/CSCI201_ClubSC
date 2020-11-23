import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResult from '../components/SearchResult';
import ResultContainer from '../components/ResultContainer';
import ContainerView from '../components/ContainerView';

const ResultsPage = ({ term, onTermChange, onClubSelect }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    const search = async () => {
      const { data } = await axios.post("http://localhost:8080/app/clubsearch",
        {
          key: term
        }
      )

      if(!isCancelled){
        setResults(data);
      }
    }

    search();

    return () => {
      isCancelled = true;
    };
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <SearchResult
        onClubSelect={onClubSelect}
        key={result.club_id}
        id={result.club_id}
        name={result.username}
        description={result.desc}
      />
    );
  });

  return (
    <ContainerView search={true} onTermChange={onTermChange}>
      <div className="container">
      <p className="my-3" style={{textAlign:'center'}}>{`${results.length} results found`}</p>
      <ResultContainer>
        {renderedResults}
      </ResultContainer>
      </div>
    </ContainerView>
  );
};

ResultsPage.defaultProps = {
  term: window.location.search.slice(1, window.location.search.length)
}

export default ResultsPage;
