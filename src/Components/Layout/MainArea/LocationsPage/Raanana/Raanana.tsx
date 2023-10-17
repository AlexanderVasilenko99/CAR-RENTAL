import FullCity from "../FullCity/FullCity";
import "./Raanana.css";

function Raanana(): JSX.Element {

    return (
        <div className="Raanana">
            <FullCity city={"Ra'anana"} email='vasirental@raa.co.il'
                address="Klauzner 8 st, Ra'anana." redirectPath="#" phoneNumber="" aboutLocation="The Ra'anana branch is
                        located in Ra'ananas city center. Placed in a strategic location between Herzelias and Ra'ananas infamous
                        High-Tec industrial zones. The location is merely a 10 minute drive from both Ra'ananas train stations,
                        10 minutes from Ra'ananas industrial zone, 10 kilometers from Herzelia And 30 kilometers from Tel Aviv
                        city center." reachOfficeInstructions="Our office is located at Klauzner 8 st, Ra'anana. You can find
                        us on floor 1. There is plenty of parking on the street and in the area."/>
        </div>
    );
}

export default Raanana;
