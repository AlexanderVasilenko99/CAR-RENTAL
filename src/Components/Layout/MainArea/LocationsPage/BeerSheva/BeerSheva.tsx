import { useEffect } from "react";
import FullCity from "../FullCity/FullCity";
import "./BeerSheva.css";
import locationsmapenum, { LocationsEnum } from "../../../../../Enums/LocationsMapEnum";

function BeerSheva(): JSX.Element {
    useEffect(() => {
        const coords = locationsmapenum.locations[LocationsEnum.BEER_SHEVA]
        console.log(coords);
    }, []);
    return (
        <div className="BeerSheva">
            <FullCity city={"Be'er Sheva"} email='vasirental@bes.co.il' locationId={LocationsEnum.BEER_SHEVA}
                address="Henrietta Szold st 2, Be'er Sheva." redirectPath="#" phoneNumber="" aboutLocation="The Be'er Sheva branch
                        is located in Be'er Shevas city center. Placed in a strategic location near its railway station and central
                        bus station makes it easy to reach. Be'er Sheva is a great location to start exploring southern Israel and
                        the Negev desert." reachOfficeInstructions="Our office is located at Henrietta Szold st 2, Be'er Sheva. It
                        is a big red building right beside th Leonardo Negev Hotel. can find us on the 2nd floor. There is plenty
                        of parking on the street and in the area."/>
        </div>
    );
}

export default BeerSheva;
