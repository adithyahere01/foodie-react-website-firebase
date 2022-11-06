import React from 'react'
import Grid_img1 from '../../assets/grid-img-1.jpg'
import Grid_img2 from '../../assets/grid-img2.jpg'
import Grid_img3 from '../../assets/grid-img3.jpg'
import Grid_img4 from '../../assets/grid-img4.jpg'
import './Grid.css'

const Grid = () => {
    return (
        <section className='grid'>
            <div className="grid-container">
                <div className="grid-1">
                   <h4>burger</h4>
                   <img src={Grid_img1} alt="pizza" />
                </div>
                <div className="item grid-2">
                     <h4>Combo</h4>
                     <img src={Grid_img2} alt="vegrolls" />
                </div>
               <div className="grid-3">
                    <h4>pizza</h4>
                    <img src={Grid_img3}  alt="burger" />
               </div>
                <div className="grid-4">
                <h4>veg noodles</h4>
                    <img src={Grid_img4}  alt="plate" />
                </div>
            </div>
        </section>
    )
}

export default Grid
