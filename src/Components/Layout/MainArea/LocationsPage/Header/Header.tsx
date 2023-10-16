import { NavLink } from "react-router-dom";
import "./Header.css";
import appConfig from "../../../../../Utils/AppConfig";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <h1>
                <NavLink to={appConfig.locationsPagePath} className="Header">
                    Back To All Israel Locations
                </NavLink>
            </h1>
        </div>
    );
}

export default Header;
