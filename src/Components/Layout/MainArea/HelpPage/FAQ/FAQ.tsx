import Back from "../Back/Back";
import "./FAQ.css";

function FAQ(): JSX.Element {
    return (
        <div className="FAQ">
            <h1>FAQ</h1>
            <div className="grid-container">
                <div>
                    <img src={require("../../../../../Assets/Images/raanana.jpg")} />
                    <img src={require("../../../../../Assets/Images/telaviv.jpg")} />
                    <img src={require("../../../../../Assets/Images/tiberias.jpg")} />
                    <img src={require("../../../../../Assets/Images/haifa.png")} />
                </div>
                <ul>
                    <li><span>Q: How old do I need to be to rent a car?</span>
                        <div><span className="bold">A: </span> Most renters must be at least 21 years old. However, the minimum age may vary based on location
                            and vehicle type. Please check our terms and conditions for specifics.</div>
                    </li>
                    <li><span>Q: What documents do I need to rent a car?</span>
                        <div><span className="bold">A: </span> You'll typically need a valid driver's license(local or international), a major credit card,
                            and proof of insurance. International renters may require additional documents; please contact our team for
                            guidance.</div>
                    </li>
                    <li><span>Q: Can I rent a car with a debit card?</span>
                        <div><span className="bold">A: </span> We accept both credit and debit cards. Debit card usage may be subject to certain restrictions,
                            so it's best to contact us for details.</div>
                    </li>
                    <li><span>Q: How do I make a reservation?</span>
                        <div><span className="bold">A: </span> Reserving a vehicle is easy! You can do it online through our website or by calling our
                            reservation hotline at 050-814-5431 for Israeli clients or +972-50-814-5431 for international clients.</div>
                    </li>
                    <li><span>Q: Can I cancel or modify my reservation?</span>
                        <div><span className="bold">A: </span> Yes, reservations can typically be modified or canceled. The specific policy will depend on
                            the type of reservation and the terms and conditions. Check our cancellation policy or contact us for assistance.</div>
                    </li>
                    <li><span>Q: What is included in the rental rate?</span>
                        <div><span className="bold">A: </span> The rental rate usually includes the vehicle, standard insurance, and any applicable taxes and fees.
                            Optional add-ons and coverage can be selected during the booking process.</div>
                    </li>
                    <li><span>Q: Is there a mileage limit on rentals?</span>
                        <div><span className="bold">A: </span> Most rentals come with unlimited mileage. However, some specialty or luxury vehicles may have mileage
                            restrictions. Check your rental agreement for details</div>
                    </li>
                    <li><span>Q: Do you offer roadside assistance?</span>
                        <div><span className="bold">A: </span> Yes, all rentals include basic roadside assistance for emergencies. More comprehensive coverage options
                            are available for added peace of mind.</div>
                    </li>
                    <li><span>Q: Can I rent a specific make and model of a car?</span>
                        <div><span className="bold">A: </span> Depends on the car category. Categories 'Luxury', 'Motorcycles', 'SUV & Off Road', and
                            'Vans & Trucks' are always rented specifically and you will 100% receive the make and model you rented. In the
                            'Small', 'Medium', and 'Large' categories We'll do our best to accommodate your preferences, but specific makes
                            and models can't always be guaranteed. You will receive a vehicle in the category you selected during booking.</div>
                    </li>
                    <li><span>Q: Can I add an additional driver to the rental agreement?</span>
                        <div><span className="bold">A: </span>Yes, additional drivers can usually be added to the rental agreement, though they may need to
                            meet certain requirements and pay an extra fee.</div>
                    </li>
                    <li><span>Q: Do you offer child safety seats or GPS devices?</span>
                        <div><span className="bold">A: </span>Yes, we offer child safety seats and GPS devices as optional add-ons. You can include these
                            during the booking process.</div>
                    </li>
                    <li><span>Q: Can I return the rental to a different location?</span>
                        <div><span className="bold">A: </span>Yes, our one-way rental service allows you to return the vehicle to a different location.
                            Additional fees may apply, depending on the drop-off point.</div>
                    </li>
                    <li><span>Q: What if I return the car late?</span>
                        <div><span className="bold">A: </span>Late returns may result in additional charges. Please notify us if you expect to be late
                            to discuss any potential extensions.</div>
                    </li>
                    <li><span>Q: What if I have an accident or need to report damage?</span>
                        <div><span className="bold">A: </span>In the event of an accident or damage, contact our emergency number immediately and follow
                            our guidelines for reporting incidents. Your safety is our priority.</div>
                    </li>
                </ul>
            </div>
            <div className="form-container">
                <h1>Still have a question?</h1>
                <h3>Our agents will happily assist you with anything you might require!</h3>
                {/* form component */}
            </div>
            <Back />
        </div>
    );
}

export default FAQ;
