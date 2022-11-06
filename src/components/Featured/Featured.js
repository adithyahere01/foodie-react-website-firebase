import React, { Fragment } from 'react'
import data from '../../data';
import './Featured.css'

const Featured = () => {
    return (
        <section className='featured'> 
              <h1>Featured<span className='line'></span></h1>

              <article className="content-featured">
              {data.map((item) =>{
                let { image, id, price, name, featured } =item 
                 return (
                     <Fragment key={id}>
                     {featured && <div className="card" key={id}>
                         <img src={image} alt={name} />
                         <div className="details">
                            <p className='name'>{name}</p>
                            <p className="price">${price}</p>
                         </div>
                     </div> 
                     }
                     </Fragment>
                 )
            })}
              </article>
        </section>
    )
}

export default Featured
