import React from 'react'
import about_img from '../../assets/undraw_breakfast_psiw.svg'
import DownloadApp from '../../components/DownloadApp/DownloadApp'
import Footer from '../../components/Footer/Footer'
import './About.css'
 
const About = () => {
    return (
        <>
        <section className='about'>
            <main>
                <div className="container">
                    <div className="about-left">
                      <img src={about_img} alt="about-section-image" />
                    </div>

                    <div className="about-right">
                         <h1>About <span className="us">Us</span> <span className="line"></span></h1>

                         <p><b>Simple, Tasty, Delicious</b>  are our other names. amet consectetur adipisicing elit. Animi, commodi expedita mollitia unde iure numquam? Fuga, hic? Repellat facilis assumenda incidunt consequuntur nemo voluptatum soluta?</p>

                         <button className='btn about-btn'><a href="/menu">Menus Items</a></button>
                    </div>
                </div>
            </main>
        </section>

        <DownloadApp/>
        <Footer/>
        </>
    )
}

export default About
