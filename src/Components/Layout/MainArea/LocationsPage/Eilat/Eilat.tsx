import FullCity from "../FullCity/FullCity";
import "./Eilat.css";

function Eilat(): JSX.Element {
    return (
        <div className="Eilat">
            <FullCity city={"Eilat"} email='vasirental@elt.co.il'
                address="Sderot HaTmarim 3, Eilat." redirectPath="#" phoneNumber="" aboutLocation="The Eilat branch is
                        located in the heart of Eilat. Placed in a strategic location between all three big malls and only
                        10 minutes from it's beautiful beaches and marinas. The location makes it easy for you to enjoy the
                        city without worrying about long distances." reachOfficeInstructions="Our office is located at Sderot
                        HaTmarim 3, Eilat. You can find us on floor 1 near bank Leumi. There is plenty of parking on the street
                        and in the area."/>
        </div>
    );
}

export default Eilat;
