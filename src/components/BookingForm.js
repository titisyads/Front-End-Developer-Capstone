import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import restaurant from "../assets/images/restaurant.jpg";

const BookingForm = (props) => {

    
   const [date, setDate] = useState ("");
    const [number, setNumber] = useState ("");
    const [occasion, setOccasion] = useState ("");
    const [fullName, setFullName] = useState ("");
    const [email, setEmail] = useState ("");


    const [finalTime, setFinalTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
      );
    
      function handleDateChange(e) {
        setDate(e.target.value);
    
        var stringify = e.target.value;
        const date = new Date(stringify);
    
        props.updateTimes(date);
    
        setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
      }
    return (
    <main>
        <section className="reservation">
            <div className="booking-container">
                <section className="reservation-wrap">
                    <div className="form-wrap">
                        <h2>Reservation Details</h2>
                        <form >
                            <section className="booking-details">
                                <label htmlFor="time">Choose Time</label>
                                <select id="time" required>
                                {finalTime}
                                </select>
                                <label htmlFor="date">Date</label>
                                <input type="date" 
                                name="date" 
                                id="date"
                                value={date}
                                onChange={handleDateChange} required />

                                <label htmlFor="number">No.of Guests</label>
                                <input type="number" 
                                    name="number" 
                                    id="number" 
                                    min="2" 
                                    max="20" 
                                    placeholder="No of Guests" 
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)} required/>

                                <label htmlFor="occasion">Occasion</label>
                                <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                    <option value="">Select an Option</option>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                    <option>Graduation</option>
                                    <option>Engagement</option>
                                </select>
                                </section>
                            <section className="booking-details">
                                    <label htmlFor="fullName" >Full Name</label>
                                    <input type="text" placeholder="Full Name" name="name"
                                    onChange={(e) => setNumber(e.target.value)} required />
                                   
                                    <label htmlFor="email">E-Mail</label>
                                    <input type="email" 
                                           name="email" 
                                           id="email"  
                                           placeholder="E-Mail" 
                                           maxLength="30" 
                                           value={email}
                                           onChange={(e) => setEmail(e.target.value)}
                                           required />
                                    <label htmlFor="mobile">Mobile Number</label>
                                    <input type="text" name="mobile" id="mobile" minLength="5" maxLength="10" 
                                            placeholder="(+312) Mobile Number" required/>
                                    <label htmlFor="request">Special Requests</label>
                                    <input type="text" name="request" id="request" placeholder="Any Requests?" />
                            </section>
                            <Link to="/confirmation">
                          <button className="btn-confirm" type="submit" >Make your reservation</button></Link>
                        </form>
                    </div>
                  
                    <div className="booking-image-wrap">
                        <img src={restaurant} alt="Restaurant" />
                    </div>
                </section>
            </div>
        </section>
        </main>
    );
}

export default BookingForm;