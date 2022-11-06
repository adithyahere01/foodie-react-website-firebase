import React from 'react'
import './Footer.css'

const Footer = () => { 
    return (
        <footer>
            <div className="footer-details">
                <div className="footer-item">
                    <h4><i className="icon fas fa-map-marker-alt"></i>find us</h4>
                    <p>102 block,coimbatore</p>
                </div>

                <div className="footer-item">
                    <h4><i className="icon fas fa-phone"></i>call us</h4>
                    <p>9934675690</p>
                </div>

                <div className="footer-item">
                    <h4><i className="icon far fa-envelope-open"></i>mail us </h4>
                    <p>mail@foodie.com</p>
                </div>
            </div>

            <div className="footer-body">
                <div className="first-one footer-body-item">
                    <h4>Foodie</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                </div>

                <div className="usefull-links footer-body-item">
                    <h4>Usefull Links</h4>
                    <ul>
                        <li>Home</li>
                        <li>Order</li>
                        <li>Menu</li>
                    </ul>
                </div>

                <div className="follow footer-body-item">
                    <h4>Follow us</h4>
                    <ul>
                        <li><i className="fab fa-facebook"></i></li>
                        <li><i className="fab fa-twitter"></i></li>
                        <li><i className="fab fa-linkedin"></i></li>
                    </ul>
                </div>
            </div>

            <p className='copyright'>copyright &copy; {(new Date().getFullYear())} | Foodie</p>
        </footer>
    )
}

export default Footer
