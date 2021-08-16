import React from 'react';
import './Filters.scss';

const Filters = ({
  setSortBy,
  setFilterBy,
  setPriceFrom,
  setPriceTo
}) => {
  return (
    <div className="filters">
      <div className="filters-wrapper">
        <div className="sort-by input-group" 
          onClick={(e) => {
            setSortBy(e.target.id);
          }}>
          <p className="sort-by__inputs">Сортировать</p>
          <label><input type="radio" id="sort-inc" name="sort" /> - по возрастанию цены</label>
          <label><input type="radio" id="sort-dec" name="sort" /> - по убыванию цены</label>
        </div>

        <div className="filter input-group" 
          onClick={(e) => {
            setFilterBy(e.target.id);
          }}>
          <p className="filter__inputs">Фильтровать</p>
          <label><input type="checkbox" id="filter-one" /> - 1 пересадка</label>
          <label><input type="checkbox" id="filter-zero" /> - без пересадок</label>
        </div>

        <div className="price input-group" >
          <p className="price__inputs">Цена</p>
          <label>От <input 
            type="text" 
            id="from" 
            onChange={(e) => {
              setPriceFrom(e.target.value);
            }}/>
          </label>
          <label>До <input 
            type="text"
            id="to" 
            onChange={(e) => {
              setPriceTo(e.target.value);
            }}/>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filters;
