import { useEffect } from "react";
import FullCity from "../FullCity/FullCity";
import "./Haifa.css";
import locationsmapenum, { LocationsEnum } from "../../../../../Enums/LocationsMapEnum";

function Haifa(): JSX.Element {
    useEffect(() => {
        const coords = locationsmapenum.locations[LocationsEnum.HAIFA]
        console.log(coords);
    }, []);
    return (
        <div className="Haifa">
            <FullCity city={"Haifa"} email='vasirental@hfa.co.il' locationId={LocationsEnum.HAIFA}
                address="Yitshak Sadeh 10 st, Haifa." redirectPath="#" phoneNumber="" aboutLocation="The Haifa branch is
                        located in Haifa's city center. Placed in a strategic location between Haifa's Shrine Of The Bab,
                        Haifa's Museum of art, Haifa's old city, Haifa's zoo and the iconic Sderot Ben Gurion street and
                        it's many delicious restaurants. The location a great starting point for exploring northern Israel.
                        Make sure to visit all the beautiful sites of mount Carmel, both Galil provinces and, Acre and
                        Tiberias!" reachOfficeInstructions="Our office is located at Yitshak Sadeh 10 st, Haifa. You can find
                        us on the ground floor. There is plenty of parking on the street and in the area."/>
        </div>
    );
}

export default Haifa;
