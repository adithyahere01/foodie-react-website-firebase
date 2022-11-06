import React from 'react'
import './DownloadApp.css'
import online from '../../assets/online.png'

const DownloadApp = () => { 
    return (
        <section className='download'>
          <div className="main-download">

              <div className="download-details">
                  <h1>Download Our <span className="app-title">App</span></h1>
                  <p>Finding you the favorite foods right from your couch. <br /> Made with love by Foodie team&#128526;.</p>
                  <button className='btn download-btn'>download</button>
              </div>

              <div className="download-pic">
                  <img src={online} alt='download-btn' />
              </div>
          </div>
        </section>
    )
}

export default DownloadApp
