import { NavLink } from "react-router-dom";
import "./TermsAndConditions.css";
import appConfig from "../../../../../Utils/AppConfig";

function TermsAndConditions(): JSX.Element {
    return (
        <div className="TermsAndConditions">
            <h1>
                General Vasilenko Car Rental©️ Terms And Conditions
            </h1>
            <ul>
                <li><a href="Terms And Conditions General" download="smiley-face.png">Terms And Conditions General - PDF</a></li>
                <li><a href="Terms And Conditions Tel Aviv" download="smiley-face.png">Terms And Conditions Tel Aviv - PDF</a></li>
                <li><a href="Terms And Conditions Jerusalem" download="smiley-face.png">Terms And Conditions Jerusalem - PDF</a></li>
                <li><a href="Terms And Conditions Ben Gurion Airport(TLV)" download="smiley-face.png">Terms And Conditions Ben Gurion Airport(TLV) - PDF</a></li>
                <li><a href="Terms And Conditions Haifa" download="smiley-face.png">Terms And Conditions Haifa - PDF</a></li>
                <li><a href="Terms And Conditions Be'er Sheva" download="smiley-face.png">Terms And Conditions Be'er Sheva - PDF</a></li>
                <li><a href="Terms And Conditions Ra'anana" download="smiley-face.png">Terms And Conditions Ra'anana - PDF</a></li>
                <li><a href="Terms And Conditions Tiberias" download="smiley-face.png">Terms And Conditions Tiberias - PDF</a></li>
                <li><a href="Terms And Conditions Eilat" download="smiley-face.png">Terms And Conditions Eilat - PDF</a></li>
                <li><a href="Terms And Conditions Eilat Ramon Airport(ETM)" download="smiley-face.png">Terms And Conditions Eilat Ramon Airport(ETM) - PDF</a></li>
            </ul>
            <h3>Loyalty Program Terms And Conditions</h3>
            <ul>
                <li><a href="Terms And Conditions Loyalty Program" download="smiley-face.png">Terms And Conditions Loyalty Program</a></li>
            </ul>

            <NavLink to={appConfig.helpPagePath}>
                <h1 className="back">Back To Help Page</h1>
            </NavLink>
        </div>
    );
}

export default TermsAndConditions;
