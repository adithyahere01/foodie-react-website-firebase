import React, { useState } from 'react'
import items from '../../data'
import './Menu.css'
import Footer from '../../components/Footer/Footer' 
import SingleItem from './SingleItem'
import Category from './Category'

const allCategories = ['all', ...new Set(items.map((item) => item.category))];
// console.log(allCategories);

const Menus = () => {
   const [data, setData] = useState(items)
   const [category, setCategory] = useState(allCategories)

   const filterItems = (category)=>{
     if(category === 'all'){
         setData(items)
         return; 
     }

     const newData = items.filter((item) => {
         return item.category === category
    })
    setData(newData)
   }

    return (
        <>
        <section className='menus'> 
              <h1>Menu <span className="menu-items">Items</span></h1>
 
              <Category categories={allCategories} filterItems={filterItems}/>
              <article className="content-menus">
                  <SingleItem items={data} />
              </article>
        </section>

        <Footer/>
        </>
    )
}

export default Menus
