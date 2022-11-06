import React from 'react'
import Contact from '../../components/Contact/Contact'
import DownloadApp from '../../components/DownloadApp/DownloadApp'
import Featured from '../../components/Featured/Featured'
import Grid from '../../components/Grid/Grid'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Hero/>
            <Featured/>
            <DownloadApp/>
            <Grid/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Home
