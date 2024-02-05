import React from 'react';
import greeksalad from '../assets/images/greeksalad.jpg';
import bruchetta from '../assets/images/bruchetta.svg';
import lemondessert from '../assets/images/lemondessert.jpg';

const Specials = () => {
    return (
        <section className="special-menu">
        <div className="container">
            <section className="special-menu-wrap">
                <section className="heading">
                    <p className="title">This weeks specials!</p>
                    <button className="btn-order">Order Online</button>
                </section>
            </section>
       </div>
       <div className="flex-items">
        <div className="flex-item">
            <div className="image-wrap">
                <img src={greeksalad} alt="Greek Salad" />
            </div>
            <div className="content-wrap">
                <div className="heading">
                    <p className="title">Greek Salad</p>
                    <p className="price">$12.99</p>
                </div>
                <p className="description">The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <button className="btn-order-flex">Order a delivery</button>
                </div>
        </div>
        <div className="flex-item">
            <div className="image-wrap">
                <img src={bruchetta} alt="Bruchetta" />
            </div>
            <div className="content-wrap">
                <div className="heading">
                    <p className="title">Bruchetta</p>
                    <p className="price">$5.99</p>
                </div>
                <p className="description">"Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."</p>
                <button className="btn-order-flex">Order a delivery</button>
                </div>
        </div>
        <div className="flex-item">
            <div className="image-wrap">
                <img src={lemondessert} alt="Lemon Dessert" />
            </div>
            <div className="content-wrap">
                <div className="heading">
                    <p className="title">Lemon Dessert</p>
                    <p className="price">$10.99</p>
                </div>
                <p className="description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."</p>
                <button className="btn-order-flex">Order a delivery</button>
                </div>
        </div>
       </div>
        </section>
        
    );
}

export default Specials;