import React from 'react'
import './Contact.css'

const Contact = () => { 
    return (
        <section className='contact'>
            <div className="contact-container">
                <div className="contact-details">
                    <h1>Get in <span className="touch-title">touch.</span></h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum id animi ea fuga iure? Animi velit accusantium deserunt!</p>
                </div>

                <div className="signup-container">
                            <input type="email" name="email" id="email" placeholder='enter your email'/>
                            <label htmlFor="email" className='btn signup'>Sign Up</label>
                </div>
            </div>
        </section>
    )
}

export default Contact
