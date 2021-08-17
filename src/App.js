import React, { useEffect, useState } from 'react';
import './App.scss';
import Filters from './components/Filters/Filters';
import FlightsList from './components/FlightsList/FlightsList';

function App() {
  const [flights, setFlights] = useState();
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./flights.json');
      const json = await response.json();
      setFlights(json.result.flights.splice(0, 10))
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <Filters
        setSortBy={setSortBy}
        setFilterBy={setFilterBy}
        setPriceFrom={setPriceFrom}
        setPriceTo={setPriceTo} />
      <FlightsList 
        flights={flights}
        sortBy={sortBy}
        filterBy={filterBy}
        priceFrom={priceFrom}
        priceTo={priceTo} />
    </div>
  );
}

export default App;
