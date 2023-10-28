import { NavLink } from "react-router-dom";
import SingleServiceModel from "../../../../../Models/SingleServiceModel";
import "./SingleService.css";

function SingleService(props: SingleServiceModel): JSX.Element {
    return (
        <div className="SingleService">
            <div className="background"></div>
            <div className="content">
                <div>
                    <img src={require(`../../../../../Assets/Images/Services/${props.serviceImageName}`)} alt="" />
                    <h3>{props.serviceHeader}</h3>
                    <p>{props.serviceParagraph}</p>
                </div>

                <div>
                    <NavLink to={props.destinationUrl}>Learn More</NavLink>
                </div>
            </div>
        </div>
    );
}

export default SingleService;
