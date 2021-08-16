import React from 'react';
import './FlightsDetail.scss';

const FlightsDetails = ({ flight }) => {
  const flightDetail = {
    direct: {
      departureTime: flight.legs[0].segments[0].departureDate.split('T')[1].split(':').splice(0, 2).join(':'),
      departureDate: flight.legs[0].segments[0].departureDate.split('T')[0].split('-').splice(2, 2),
      arrivalTime: flight.legs[0].segments[1].arrivalDate.split('T')[1].split(':').splice(0, 2).join(':'),
      arrivalDate: flight.legs[0].segments[1].departureDate.split('T')[0].split('-').splice(2, 2),
      isOneConnection: flight.legs[0].segments[1]
    },
    reverse: {
      departureTime: flight.legs[1].segments[0].departureDate.split('T')[1].split(':').splice(0, 2).join(':'),
      departureDate: flight.legs[1].segments[0].departureDate.split('T')[0].split('-').splice(2, 2),
      arrivalTime: flight.legs[1].segments[1].arrivalDate.split('T')[1].split(':').splice(0, 2).join(':'),
      arrivalDate: flight.legs[1].segments[1].departureDate.split('T')[0].split('-').splice(2, 2),
      isOneConnection: flight.legs[1].segments[1]
    }
  }

  const directTotalTime = `${Number(flightDetail.direct.arrivalTime.split(':')[0]) - Number(flightDetail.direct.departureTime.split(':')[0])} ч ${Number(flightDetail.direct.arrivalTime.split(':')[1]) - Number(flightDetail.direct.departureTime.split(':')[1])} мин`
  const reverseTotalTime = `${Number(flightDetail.reverse.arrivalTime.split(':')[0]) - Number(flightDetail.reverse.departureTime.split(':')[0])} ч ${Number(flightDetail.reverse.arrivalTime.split(':')[1]) - Number(flightDetail.reverse.departureTime.split(':')[1])} мин`

  return (
    <div className="flight__item">

      <div className="header">
        <div className="header__wrapper">
          <p className="header__title">{flight.carrier.caption}</p>
          <div className="header__price-block">
            <p className="header__price">{`${flight.price.total.amount} ${flight.price.total.currency}`}</p>
            <p className="header__price-desc">Стоимость для одного взрослого пассажира</p>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="main__wrapper"> 
          <div className="flight-section direct">
            <div className="cities-section">
              <h2>{`${flight.legs[0].segments[0].departureCity.caption}, ${flight.legs[0].segments[0].departureAirport.caption} `}
                <span>{`(${flight.legs[0].segments[0].departureAirport.uid})`}</span>
              </h2>
              <div className="right-arrow"></div>
              <h2>{`${flight.legs[0].segments[1].arrivalCity.caption}, ${flight.legs[0].segments[1].arrivalAirport.caption} `}
                  <span>{`(${flight.legs[0].segments[1].arrivalAirport.uid})`}</span>
              </h2>
            </div>
            <div className="time-section">
              <div className="time-row">
                <h2>{`${flightDetail.direct.departureTime} `}<span>{`${flightDetail.direct.departureDate} авг.`}</span></h2>
                <h2>{directTotalTime}</h2>
                <h2><span>{`${flightDetail.direct.arrivalDate} авг. `}</span>{`${flightDetail.direct.arrivalTime}`}</h2>
              </div>
              <div className="connection-row">{flightDetail.direct.isOneConnection ? <span>1 пересадка</span> : ''}</div>
            </div>
            <div className="carrier-by"><p>{`Рейс выполняет: ${flight.carrier.caption}`}</p></div>
          </div>

          <div className="flight-section reverse">
            <div className="cities-section">
              <h2>{`${flight.legs[1].segments[0].departureCity.caption}, ${flight.legs[1].segments[0].departureAirport.caption} `}
                <span>{`(${flight.legs[1].segments[0].departureAirport.uid})`}</span>
              </h2>
              <div className="right-arrow"></div>
              <h2>{`${flight.legs[1].segments[1].arrivalCity.caption}, ${flight.legs[1].segments[1].arrivalAirport.caption} `}
                  <span>{`(${flight.legs[1].segments[1].arrivalAirport.uid})`}</span>
              </h2>
            </div>
            <div className="time-section">
              <div className="time-row">
                <h2>{`${flightDetail.reverse.departureTime} `}<span>{`${flightDetail.reverse.departureDate} авг.`}</span></h2>
                <h2>{reverseTotalTime}</h2>
                <h2><span>{`${flightDetail.reverse.arrivalDate} авг. `}</span>{`${flightDetail.reverse.arrivalTime}`}</h2>
              </div>
              <div className="connection-row">{flightDetail.reverse.isOneConnection ? <span>1 пересадка</span> : ''}</div>
            </div>
            <div className="carrier-by"><p>{`Рейс выполняет: ${flight.carrier.caption}`}</p></div>
          </div>
        </div>
      </div>

      <button className="flight__button">выбрать</button>

    </div>
  )
}

export default FlightsDetails;
