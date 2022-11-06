import React from 'react';
import './Menu.css'

const Category = ({ categories, filterItems }) => {

  return <div className='btn-container'>
      {categories.map((category, i) => {
           return(
             <button key={i} className="filter-btn" onClick={()=> filterItems(category)}>{category}</button>
           )
         })}
  </div>;
};

export default Category;
