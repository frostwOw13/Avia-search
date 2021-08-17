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

  function sortByPrice (flight) {
    const totalPrice = Number(flight.flight.price.total.amount);
    if (priceFrom !== "" || priceTo !== "") {
      if ((priceFrom !== "" && priceTo !== "" && totalPrice > priceFrom && totalPrice < priceTo)
        || (priceFrom !== "" && totalPrice > priceFrom)
        || (priceTo !== "" && totalPrice < priceTo)) {
        return flight;
      }
    } else return flight;
  }

  function connectionsFilter (flight) {
    if (filterBy === 'filter-one') {
      if (flight.flight.legs[0].segments[1]) return flight
    } else if (filterBy === 'filter-zero') {
      if (!flight.flight?.legs[0].segments[1]) return flight
    } else return flight
  }

  return (
    <div className="flights-list">
      {flights?.filter((flight) => sortByFunction(flight))
      .filter((flight) => sortByPrice(flight))
      .filter((flight) => connectionsFilter(flight))
      .map((flight) => {
        return <FlightsDetails key={flight.flightToken} flight={flight.flight} />
      })}
    </div>
  )
}

export default FlightsList;
