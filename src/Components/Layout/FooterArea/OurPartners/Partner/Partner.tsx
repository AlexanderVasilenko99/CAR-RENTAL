import { NavLink } from "react-router-dom";
import "./Partner.css";
import PartnerModel from "../../../../../Models/PartnerModel";

function Partner(props: PartnerModel): JSX.Element {
    return (
        <div className="Partner">
            <div>
                <NavLink to={props.link} target="_blank">
                    <img src={require(`../../../../../Assets/Images/BusinessPartners/${props.imgName}`)} alt="" />
                </NavLink>
            </div>
        </div>
    );
}

export default Partner;
