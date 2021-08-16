import React, { useEffect, useState } from 'react';
import FlightsDetails from '../FlightsDetail/FlightsDetails';

const FlightsList = () => {
  const [flights, setFlights] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('./flights.json');
      const json = await response.json();
      setFlights(json.result.flights.splice(0, 2))
    }
    fetchData()
  }, []);

  console.log(flights)

  return (
    <>
      {flights?.map((flight) => {
        return <FlightsDetails key={flight.token} flight={flight.flight} />
      })}
    </>
  )
}

export default FlightsList;
