import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import Deal1 from './media/deal1.png';
import Deal2 from './media/deal2.png';
import Deal3 from './media/deal3.png';
import interior from './media/interior.jpg';

function Home() {
    return (
        <div className="main-container container">
            <nav className="navbar navbar-expand-md navbar-light">
                <a className="navbar-brand" href="#">Toscano's Pizza</a>
                <a>555-555-XXXX</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu" className="nav-link">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="jumbotron jumbotron-fluid hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-6">
                            <div className="text-center text-white hero-text ">
                                <h1 className="display-2 mb-3 main-text">TOSCANO'S PIZZA</h1>
                                <p className="lead mb-6"><i>Authentic Italian Pizza</i></p>
                                <Link to="/menu" className="btn btn-warning btn-lg font-weight-bold">See Our Menu</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CAROUSEL */}
            <Carousel className='my-3 carousel' interval={2000}>
                <Carousel.Item>
                    <img className="d-block w-100" src={Deal1} alt="First deal" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Deal2} alt="Second deal" />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Deal3} alt="Third deal" />
                </Carousel.Item>
            </Carousel>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className='text-center'>About Us</h2>
                        <p>Welcome to Toscano's Pizza! We are a family-owned and operated pizzeria dedicated to bringing
                            you the authentic flavors of Italy right here in our vibrant neighborhood. At Toscano's, we
                            believe that great pizza starts with quality ingredients. That's why we source the freshest
                            produce, finest cheeses, and premium meats to create our mouthwatering pies. Every pizza is
                            carefully handcrafted, from the crispy thin crust to the rich, tangy tomato sauce. Our menu
                            offers a variety of delicious toppings, allowing you to customize your perfect pizza. Whether
                            you're dining in our cozy and welcoming atmosphere or grabbing a quick takeout, we guarantee
                            a delightful and satisfying experience. Join us at Toscano's Pizza and indulge in the taste of Italy with every bite. Buon appetito!</p>
                    </div>
                    <div className="col-md-6">
                        <img className="d-block w-100" src={interior} alt="interior of restaurant" />
                    </div>
                </div>
                <div className='text-center my-5'>
                    <h2>Contact Us</h2>
                    <p>Email: info@toscanospizza.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
            </div>
        </div>
    );
}

export default Home;