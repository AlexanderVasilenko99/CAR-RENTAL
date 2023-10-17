import FullCity from "../FullCity/FullCity";
import "./Ramon.css";

function Ramon(): JSX.Element {
    return (
        <div className="Ramon">
            <FullCity city={"Be'er Ora"} email='vasirental@etm.co.il'
                address="Be'er Ora." redirectPath="#" phoneNumber="" aboutLocation="The Ramon Be'er Ora branch is
                        located inside Eilat-Ramon Airport. The location is only 20 kilometers from Eilat And 20 kilometers
                        from Yotvata." reachOfficeInstructions="Our office is located at Ramon International Airport, Be'er Ora.
                        You can find us on the ground floor."/>
        </div>
    );
}

export default Ramon;
