import React from 'react';
import FlightsDetails from '../FlightsDetail/FlightsDetails';

const FlightsList = ({ 
  flights,
  sortBy,
  filterBy,
  priceFrom,
  priceTo
 }) => {
  function sortByFunction (flight) {
    if (sortBy === undefined) return flight; 
    else if (sortBy === 'sort-inc') {
      flights.sort((a, b) => {
        return a.flight.price.total.amount - b.flight.price.total.amount
      })
    }
    else if (sortBy === 'sort-dec') {
      flights.sort((a, b) => {
        return b.flight.price.total.amount - a.flight.price.total.amount
      })
    }
    return flight;
  }

  return (
    <div className="flights-list">
      {flights?.filter((flight) => sortByFunction(flight)).map((flight) => {
        return <FlightsDetails key={flight.token} flight={flight.flight} />
      })}
    </div>
  )
}

export default FlightsList;
