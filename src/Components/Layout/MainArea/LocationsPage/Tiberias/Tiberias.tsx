import locationsmapenum, { LocationsEnum } from "../../../../../Enums/LocationsMapEnum";
import FullCity from "../FullCity/FullCity";
import "./Tiberias.css";

function Tiberias(): JSX.Element {
    return (
        <div className="Tiberias">
            <FullCity city={"Tiberias"} email='vasirental@tib.co.il' locationParams={locationsmapenum.locations[LocationsEnum.TIBERIAS]}
                address="Yehuda Halevi 7 st, Tiberias." redirectPath="#" phoneNumber="" aboutLocation="The Tiberias branch is
                        located in a convenient to access central area of Tiberias. only 5 minutes away from the Tiberias Mall,
                        and 10 minutes from the beautiful beaches of The Sea Of Galilee. 60 kilometers from Haifa And only 30
                        kilometers from all the beautiful nature reserves of Israels northern area." reachOfficeInstructions="
                        Our office is located at Yehuda Halevi 7 st, Tiberias. You can find us on the 2nd floor. There is plenty
                        of parking on the street and in the area."/>
        </div>
    );
}

export default Tiberias;
