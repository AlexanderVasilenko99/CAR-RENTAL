import { NavLink } from "react-router-dom";
import "./Back.css";
import appConfig from "../../../../../Utils/AppConfig";

function Back(): JSX.Element {
    return (
        <div className="Back">
            <NavLink to={appConfig.helpPagePath}>
                <h1>Back To Help Page</h1>
            </NavLink>
        </div>
    );
}

export default Back;
