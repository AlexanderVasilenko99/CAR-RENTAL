import FullCity from "../FullCity/FullCity";
import "./Jerusalem.css";

function Jerusalem(): JSX.Element {
    return (
        <div className="Jerusalem">
            <FullCity city={"Jerusalem"} email='vasirental@jer.co.il'
                address="Tora Mi'Tsiyon 8 st, Jerusalem." redirectPath="#" phoneNumber="" aboutLocation="The Jerusalem branch is
                        placed in a easy to reach location between in Jerusalem. Close to Jerusalems old city, Makneh Yehuda Market,
                        The Israel Museum, Israels Aquarium, Mount Herzl, Yad Va'Shem and of course the Knesset. makes it ideal
                        for exoloring Jerusalem and Israel." reachOfficeInstructions="Our office is located at Tora Mi'Tsiyon 8 st,
                        Jerusalem. You can find
                        us right beside Jerusalems Central Station and the Allenby square. We are located on the 3rd floor."/>
        </div>
    );
}

export default Jerusalem;
