import React from 'react';
import name1 from '../assets/images/name1.jpg';
import name2 from '../assets/images/name2.jpg';
import name3 from '../assets/images/name3.jpg';
import name4 from '../assets/images/name4.jpg';
import star from '../assets/icons/star.png';

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <section className="testimonials-wrap">
                    <p className="heading">What people say about us !</p>
                    <div className="testimonials-flex-items">
                        <div className="testimonials-flex-item">
                            <div className="testimonials-image-wrap">
                                <img src={name1} alt="Jurika K." />
                            </div>
                            <p className="name">Jurika K.</p>
                            <span className="stars">
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                            </span>
                            <div className="text">I really enjoyed the atmosphere.
                            </div>
                        </div>
                        <div className="testimonials-flex-item">
                            <div className="testimonials-image-wrap">
                                <img src={name2} alt="Christina W." />
                            </div>
                            <p className="name">Christina W.</p>
                            <span className="stars">
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                            </span>
                            <div className="text">The Greek Salad was excellent!
                            </div>
                        </div>
                        <div className="testimonials-flex-item">
                            <div className="testimonials-image-wrap">
                                <img src={name3} alt="Stephanie L." />
                            </div>
                            <p className="name">Stephanie L.</p>
                            <span className="stars">
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                            </span>
                            <div className="text">Best lemon dessert ever!
                            </div>
                        </div>
                        <div className="testimonials-flex-item">
                            <div className="testimonials-image-wrap">
                                <img src={name4} alt="Alison G." />
                            </div>
                            <p className="name">Alison G.</p>
                            <span className="stars">
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                                <img src={star} alt="Rating star!" />
                            </span>
                            <div className="text">You have to try the pasta!
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
        );
    }
    
    export default Testimonials;