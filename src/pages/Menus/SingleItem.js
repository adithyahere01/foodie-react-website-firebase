import React from 'react';
import default_img from '../../assets/img-2.jpg'
import './Menu.css'

const SingleItem = ({ items }) => {
  return (
      <>
          {items.map((item) =>{
                let { image, id, price, name } =item 
                 return (
                     <div className="cards" key={id} >
                         <img src={image ?image : default_img} alt={name} />
                         <div className="details">
                            <p className='name'>{name}</p>
                            <p className="price">${price}</p>
                         </div>
                     </div> 
                 )
            })}
      </>
  )
};

export default SingleItem;
