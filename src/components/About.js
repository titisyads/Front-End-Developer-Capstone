import React from 'react';
import restaurantchef1 from '../assets/images/restaurantchef1.jpg';
import restaurantchef2 from '../assets/images/restaurantchef2.jpg';

const About = () => {
    return (
        <>
        <section className="about">
            <div className="container">
            <section className="about-wrap">
                <section className="about-text">
                    <h2 className="about-heading">Little Lemon</h2>
                    <h3 className="location">Chicago</h3>
                    <p className="about-subsection">We are a family owned Mediterranean restaurant, located on  Maldove Street in Chicago, Illionis. We focus
                    on traditional recipes served with a modern twist.</p>
                </section>

                <section className="about-image-wrap">
                <img src={restaurantchef2} alt="Mario"></img>
                    <img src={restaurantchef1} alt="Mario and Andrian"></img>
                </section>
            </section>
            </div>
        </section>
  </>
    );
}

export default About;