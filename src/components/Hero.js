import React from 'react';
import { Link } from "react-router-dom"
import BookingForm from "./BookingForm";


const Hero = () => {
    return (

        <section className="hero">
            <div className="container">
            <section className="hero-wrap">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="hero-subsection">We are a family owned Mediterranean restaurant, located  in Chicago, Illinois. We focus
                    on traditional recipes served with a modern twist.</p>
                    <Link to="/booking" element={<BookingForm />}><button className="btn-reserve">Reserve</button></Link>
                </section>

                <section className="hero-image">
                    <img src={require('../assets/images/restaurantfood.jpg')} alt="Little Lemon restaurant cuisine"></img>
                </section>
            </section>
            </div>
        </section>

    );
}

export default Hero;