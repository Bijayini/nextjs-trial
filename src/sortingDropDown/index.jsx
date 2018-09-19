import React from 'react';

 const SortingDropDown = () =>{
  return (
    <div className="sort-dropdown">
      <span>Sort By: </span>
      <select>
         <option value="title">Name</option>
         <option value="year">Release Year</option>
      </select>
      </div>);
}

 export default SortingDropDown;
