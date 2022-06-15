// Api key to use https://restcountres.com/v2/all

import { useState, useEffect } from "react";
import axios from "axios";
import DisplayResult from "./components/DisplayResult";

function App() {
  const [countries, setCountries] = useState([]);
  const [newSearch, setNewSearch] = useState("");
  const handleChange = (event) => {
    setNewSearch(event.target.value);
  };

  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://restcountries.com/v2/all");
      const data = await response.data;
      setCountries(data);
      console.log("fetched data");
    }
    getData();
  }, []);

  return (
    <div className="App">
      <p>
        Find countries <input value={newSearch} onChange={handleChange}></input>
      </p>
      <DisplayResult results={countries} searchFilter={newSearch} />
    </div>
  );
}

export default App;
