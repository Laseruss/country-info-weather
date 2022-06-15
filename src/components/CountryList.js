import React from "react";

function CountryList({ res }) {
  return (
    <div>
      {res.map((x, i) => (
        <p key={i}>{x.name}</p>
      ))}
    </div>
  );
}

export default CountryList;
