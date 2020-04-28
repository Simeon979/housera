import React, { useState, useEffect } from "react";

import styled from "styled-components";
import city from "../streets.json";

const SearchContainer = styled.fieldset`
  width: 80%;
  min-height: 20vh;
  border: 2px solid;
  border-color: #6dd5ed #2193b0;
`;

const SearchQuestion = styled.legend`
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;

const SearchLabel = styled.label``;
const SearchInput = styled.input`
  width: 80%;
  outline: 0;
  border: 1px solid #06d7a0;
  border-radius: 10px;
  box-shadow: none;
  height: 10vh;
  padding: 20px;
  display: block;
  margin: 5vh auto;
`;

const SearchResult = styled.datalist``;

const SearchForm = ({ onChange, value }) => {
  const [matchingLocations, setMatchingLocations] = useState([]);

  useEffect(() => {
    const streets = city.locations.reduce(
      (acc, location) => acc.concat(location.streetNames),
      []
    );
    setMatchingLocations(streets);
  }, []);

  return (
    <SearchContainer>
      <SearchQuestion>
        <SearchLabel htmlFor="location">
          Choose your desired location
        </SearchLabel>
      </SearchQuestion>
      <SearchInput
        list="available-locations"
        id="location"
        name="location"
        value={value}
        onChange={onChange}
        placeholder="Search for a location"
      />
      <SearchResult id="available-locations">
        {matchingLocations.map((location) => (
          <option key={location} value={location} label={location} />
        ))}
      </SearchResult>
    </SearchContainer>
  );
};

const inputName = "location";

export { inputName, SearchForm };
