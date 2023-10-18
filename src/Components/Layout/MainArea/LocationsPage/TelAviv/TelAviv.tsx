import { LocationsEnum } from "../../../../../Enums/LocationsMapEnum";
import FullCity from "../FullCity/FullCity";
import "./TelAviv.css";

function TelAviv(): JSX.Element {
    return (
        <div className="TelAviv">
            <FullCity city={"Tel Aviv"} email='vasirental@tlv.co.il' locationId={LocationsEnum.TEL_AVIV}
                address="Beit Ovad 4 st, Tel Aviv." redirectPath="#" phoneNumber="" aboutLocation="The Tel Aviv branch is
                        located in Tel Aviv city center. Placed at your convenience in a strategic location in the beating
                        heart of israel. The location is easily accessible by bus, or train via Tel Aviv Ha'Shalom and Tel Aviv
                        Ha'Hagana railway stations. The branch's location makes it convenient to access all of Tel Aviv historic
                        and must-see places." reachOfficeInstructions="Our office is located at Beit Ovad 4 st, Tel Aviv. You can find
                        us on the 4th floor in office number 401."/>
        </div>
    );
}

export default TelAviv;
