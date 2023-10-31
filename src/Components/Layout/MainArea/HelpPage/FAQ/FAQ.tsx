import { FAQModel } from "../../../../../Models/FAQModel";
import Back from "../Back/Back";
import "./FAQ.css";

function FAQ(): JSX.Element {
    const questions: FAQModel[] = [
        new FAQModel("How old do I need to be to rent a car?", "Most renters must be at least 21 years old. However, the minimum age may vary based on location and vehicle type. Please check our terms and conditions for specifics."),
        new FAQModel("What documents do I need to rent a car?", "You'll typically need a valid driver's license(local or international), a major credit card, and proof of insurance. International renters may require additional documents; please contact our team for guidance."),
        new FAQModel("Can I rent a car with a debit card?", "We accept both credit and debit cards. Debit card usage may be subject to certain restrictions, so it's best to contact us for details."),
        new FAQModel("How do I make a reservation?", "Reserving a vehicle is easy! You can do it online through our website or by calling our reservation hotline at 050-814-5431 for Israeli clients or +972-50-814-5431 for international clients."),
        new FAQModel("Can I cancel or modify my reservation?", "Yes, reservations can typically be modified or canceled. The specific policy will depend on the type of reservation and the terms and conditions. Check our cancellation policy or contact us for assistance."),
        new FAQModel("What is included in the rental rate?", "The rental rate usually includes the vehicle, standard insurance, and any applicable taxes and fees. Optional add-ons and coverage can be selected during the booking process."),
        new FAQModel("Is there a mileage limit on rentals?", "Most rentals come with unlimited mileage. However, some specialty or luxury vehicles may have mileage restrictions. Check your rental agreement for details."),
        new FAQModel("Do you offer roadside assistance?", "Yes, all rentals include basic roadside assistance for emergencies. More comprehensive coverage options are available for added peace of mind."),
        new FAQModel("Can I rent a specific make and model of a car?", "Depends on the car category. Categories 'Luxury', 'Motorcycles', 'SUV & Off Road', and 'Vans & Trucks' are always rented specifically and you will 100% receive the make and model you rented. In the 'Small', 'Medium', and 'Large' categories We'll do our best to accommodate your preferences, but specific makes and models can't always be guaranteed. You will receive a vehicle in the category you selected during booking."),
        new FAQModel("Can I add an additional driver to the rental agreement?", "Yes, additional drivers can usually be added to the rental agreement, though they may need to meet certain requirements and pay an extra fee."),
        new FAQModel("Do you offer child safety seats or GPS devices?", "Yes, we offer child safety seats and GPS devices as optional add-ons. You can include these during the booking process."),
        new FAQModel("Can I return the rental to a different location?", "Yes, our one-way rental service allows you to return the vehicle to a different location. Additional fees may apply, depending on the drop-off point."),
        new FAQModel("What if I return the car late?", "Late returns may result in additional charges. Please notify us if you expect to be late to discuss any potential extensions."),
        new FAQModel("What if I have an accident or need to report damage?", "In the event of an accident or damage, contact our emergency number immediately and follow our guidelines for reporting incidents. Your safety is our priority."),
    ]
    return (
        <div className="FAQ">
            <h1>FAQ</h1>
            <div className="grid-container">
                <div>
                    <img src={require(`../../../../../Assets/Images/Locations/raanana.jpg`)} />
                    <img src={require(`../../../../../Assets/Images/Locations/telaviv.jpg`)} />
                    <img src={require(`../../../../../Assets/Images/Locations/tiberias.jpg`)} />
                    <img src={require(`../../../../../Assets/Images/Locations/haifa.png`)} />
                </div>
                <ul>
                    {questions.map(q => <li><span>Q: {q.question}</span>
                        <div><span className="bold">A: </span> {q.answer}</div>
                    </li>)}
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
