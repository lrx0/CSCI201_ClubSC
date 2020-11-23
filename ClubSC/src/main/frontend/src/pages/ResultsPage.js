import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResult from '../components/SearchResult';
import ResultContainer from '../components/ResultContainer';
import ContainerView from '../components/ContainerView';

const ResultsPage = ({ term, onTermChange }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.post("http://localhost:8080/app/clubsearch", {
        key: term
      });

      setResults(data);
    }

    search();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <SearchResult
        key={result.club_id}
        title={result.username}
        text={result.desc}
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

export default ResultsPage;
