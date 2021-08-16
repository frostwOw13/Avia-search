import React from 'react';
import './FlightsDetail.scss';

const FlightsDetails = ({ flight }) => {
  const flightDetail = {
    direct: {
      isOneConnection: flight.legs[0].segments[1] !== undefined,
      departureTime: flight.legs[0].segments[0].departureDate.split('T')[1].split(':').splice(0, 2).join(':'),
      departureDate: flight.legs[0].segments[0].departureDate.split('T')[0].split('-').splice(2, 2),
      departureCity: flight.legs[0].segments[0].departureCity.caption,
      departureAirport: flight.legs[0].segments[0].departureAirport.caption,
      departureAirportUid: flight.legs[0].segments[0].departureAirport.uid,
      arrivalTime: flight.legs[0].segments[1] ? flight.legs[0].segments[1].arrivalDate.split('T')[1].split(':').splice(0, 2).join(':') : flight.legs[0].segments[0].arrivalDate.split('T')[1].split(':').splice(0, 2).join(':'),
      arrivalDate: flight.legs[0].segments[1] ? flight.legs[0].segments[1].arrivalDate.split('T')[0].split('-').splice(2, 2) : flight.legs[0].segments[0].arrivalDate.split('T')[0].split('-').splice(2, 2),
      arrivalCity: flight.legs[0].segments[1] ? flight.legs[0].segments[0].arrivalCity.caption : flight.legs[0].segments[0].arrivalCity.caption,
      arrivalAirport: flight.legs[0].segments[1] ? flight.legs[0].segments[0].arrivalAirport.caption : flight.legs[0].segments[0].arrivalAirport.caption,
      arrivalAirportUid: flight.legs[0].segments[1] ? flight.legs[0].segments[0].arrivalAirport.uid : flight.legs[0].segments[0].arrivalAirport.uid,
    },
    reverse: {
      isOneConnection: flight.legs[1].segments[1] !== undefined,
      departureTime: flight.legs[1].segments[0].departureDate.split('T')[1].split(':').splice(0, 2).join(':'),
      departureDate: flight.legs[1].segments[0].departureDate.split('T')[0].split('-').splice(2, 2),
      departureCity: flight.legs[1].segments[0].departureCity.caption,
      departureAirport: flight.legs[1].segments[0].departureAirport.caption,
      departureAirportUid: flight.legs[1].segments[0].departureAirport.uid,
      arrivalTime: flight.legs[1].segments[1] ? flight.legs[1].segments[1].arrivalDate.split('T')[1].split(':').splice(0, 2).join(':') : flight.legs[1].segments[0].arrivalDate.split('T')[1].split(':').splice(0, 2).join(':'),
      arrivalDate: flight.legs[1].segments[1] ? flight.legs[1].segments[1].arrivalDate.split('T')[0].split('-').splice(2, 2) : flight.legs[1].segments[0].arrivalDate.split('T')[0].split('-').splice(2, 2),
      arrivalCity: flight.legs[1].segments[1] ? flight.legs[1].segments[0].arrivalCity.caption : flight.legs[1].segments[0].arrivalCity.caption,
      arrivalAirport: flight.legs[1].segments[1] ? flight.legs[1].segments[0].arrivalAirport.caption : flight.legs[1].segments[0].arrivalAirport.caption,
      arrivalAirportUid: flight.legs[1].segments[1] ? flight.legs[1].segments[0].arrivalAirport.uid : flight.legs[1].segments[0].arrivalAirport.uid,
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
              <p>{`${flightDetail.direct.departureCity}, ${flightDetail.direct.departureAirport} `}
                <span>{`(${flightDetail.direct.departureAirportUid})`}</span>
              </p>
              <div className="right-arrow"></div>
              <p>{`${flightDetail.direct.arrivalCity}, ${flightDetail.direct.arrivalAirport} `}
                  <span>{`(${flightDetail.direct.arrivalAirportUid})`}</span>
              </p>
            </div>
            <div className="time-section">
              <div className="time-row">
                <p id="arrival-time">{`${flightDetail.direct.departureTime} `}
                  <span>{`${flightDetail.direct.departureDate} авг.`}</span>
                </p>
                <p id="total-time">{directTotalTime}</p>
                <p id="arrival-time">
                  <span>{`${flightDetail.direct.arrivalDate} авг. `}</span>
                  {`${flightDetail.direct.arrivalTime}`}</p>
              </div>
              <div className={flightDetail.direct.isOneConnection ? 'connection-row splice' : 'connection-row'}>{flightDetail.direct.isOneConnection ? <span>1 пересадка</span> : ''}</div>
            </div>
            <div className="carrier-by"><p>{`Рейс выполняет: ${flight.carrier.caption}`}</p></div>
          </div>

          <div className="flight-section reverse">
            <div className="cities-section">
              <p>{`${flightDetail.reverse.departureCity}, ${flightDetail.reverse.departureAirport} `}
                <span>{`(${flightDetail.reverse.departureAirportUid})`}</span>
              </p>
              <div className="right-arrow"></div>
              <p>{`${flightDetail.reverse.arrivalCity}, ${flightDetail.reverse.arrivalAirport} `}
                  <span>{`(${flightDetail.reverse.arrivalAirportUid})`}</span>
              </p>
            </div>
            <div className="time-section">
              <div className="time-row">
                <p id="arrival-time">{`${flightDetail.reverse.departureTime} `}
                  <span>{`${flightDetail.reverse.departureDate} авг.`}</span>
                </p>
                <p id="total-time">{reverseTotalTime}</p>
                <p id="arrival-time">
                  <span>{`${flightDetail.reverse.arrivalDate} авг. `}</span>
                  {`${flightDetail.reverse.arrivalTime}`}</p>
              </div>
              <div className={flightDetail.direct.isOneConnection ? 'connection-row splice' : 'connection-row'}>{flightDetail.direct.isOneConnection ? <span>1 пересадка</span> : ''}</div>
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
