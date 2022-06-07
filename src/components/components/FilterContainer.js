import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterSliceActions } from "../../store/FilterSlice";
import { ImCross } from "react-icons/im";

const FilterContainer = () => {
  const list = useSelector((state) => state.jobFilter.filterList);
  const dispatch = useDispatch()
 const removeCategory = (filter, e) => {
     dispatch(filterSliceActions.removeCategory(filter))
 }
 const clearFilters = e => {
     dispatch(filterSliceActions.clearCategories())
 }
  return (
    <div className="filter-container">
      <div className="filters">
        {list.map((filter) => (
          <div key={filter} className="filterDiv">
      
            <button>{filter}</button>
            <span onClick={removeCategory.bind(this, filter)}>
              <ImCross />
            </span>
          </div>
        ))}
      </div>
      <button onClick={clearFilters} className="clear-btn">clear</button>
    </div>
  );
};

export default FilterContainer;
