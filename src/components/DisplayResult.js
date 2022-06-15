import React from "react";
import CountryList from "./CountryList";
import Country from "./Country";

function DisplayResult({ results, searchFilter }) {
  if (!(searchFilter === "")) {
    const filteredResult = results.filter((result) => {
      return result.name.toLowerCase().includes(searchFilter.toLowerCase());
    });

    console.log(filteredResult);

    let numResults = filteredResult.length;
    if (numResults > 10) {
      return <p>Too many matches, specify further</p>;
    } else if (numResults > 1) {
      return <CountryList res={filteredResult} />;
    } else if (numResults === 1) {
      const country = filteredResult[0];
      return <Country country={country} />;
    }
  }
}

export default DisplayResult;
