import React from 'react';
import { useNavigate } from 'react-router-dom';
import img_1 from '../../assets/img-2.jpg';
import img_2 from '../../assets/img-3.jpg';
import img_3 from '../../assets/img-1.jpg';
import './Hero.css';

const Hero = () => {
  let history = useNavigate();

  function handleClick() {
    history('/signup'); 
  }

    return (
        <section className='hero'>
            <div className="container">
                <div className="content">
                    <div className="left">
                        <h1><span className="discover">Discover</span> The</h1>
                        <h1>Tasty & Fresh<i className="fas fa-laugh-wink fa emoji-5"></i></h1>
                        <h1>Food Around You</h1>

                        <div className="signup-container">
                            <input type="email" name="email" id="email" placeholder='enter your email'/>
                            <label onClick={handleClick} htmlFor="email" className='btn signup'>Sign Up</label>
                        </div>
                    </div>

                    <div className="right">
                        {/* 3images */}
                        <div className="img-container">
                            <img src={img_1} alt="pic"  className='img-1'/>
                            <img src={img_2} alt="pic" className='img-2' />
                            <img src={img_3} alt="pic"  className='img-3'/>
                        </div>
                    </div>

                    {/* emojies */}
                    <div className="emoji-div">
                    <i className="far fa-laugh-squint fa emoji-1"></i>
                    <i className="fas fa-smile-beam fa emoji-2"></i>
                    <i className="fas fa-smile-wink fa emoji-3"></i>
                    <i className="fas fa-laugh-beam fa emoji-4"></i>
                    <i className="far fa-grin-tongue fa emoji-6"></i>
                    {/* <i className="far fa-grin-hearts fa emoji-8"></i> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
