import Back from "../Back/Back";
import FamilyTravelAdvice from "./FamilyTravelAdvice/FamilyTravelAdvice";
import "./Info.css";
import LawsRegulations from "./LawsRegulations/LawsRegulations";
import RentalTips from "./RentalTips/RentalTips";
import RoadTripInspiration from "./RoadTripInspiration/RoadTripInspiration";

function Info(): JSX.Element {
    return (
        <div className="Info">
            <h1>Exploring More with Vasilenko Car Rental</h1>
            <p id="welcome">Welcome to our "Useful Information" section, where we aim to provide you with valuable insights and tips to
                enhance your car rental experience. We understand that every journey is a unique adventure, and we're here
                to ensure that your time on the road is as seamless and enjoyable as possible. Whether you're a frequent
                traveler, a family looking for travel advice, or a business professional seeking transportation insights,
                you'll find a wealth of knowledge here. We're passionate about more than just cars; we're passionate about
                enabling your travel dreams. Discover helpful guides, travel inspiration, and expert advice that will make
                your road trips, vacations, and business travels even more remarkable. At Vasilenko Ca Rental, we're not
                just here to rent you a car; we're here to be your trusted travel companion, providing the keys to unlock
                incredible journeys and unforgettable experiences. Start your exploration here, and let the road ahead lead
                to exciting new horizons!</p>

            <RentalTips />
            <RoadTripInspiration />
            <LawsRegulations />
            <FamilyTravelAdvice />
            <div className="row-container">
                <h2>Packing and Travel Essentials</h2>
                <div className="row-content">

                </div>
            </div>
            <div className="row-container">
                <h2>Local Culture and Etiquette</h2>
                <div className="row-content">

                </div>
            </div>
            <Back />
        </div>
    );
}

export default Info;
