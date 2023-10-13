import { NavLink } from "react-router-dom";
import "./FleetItem.css";
import VehicleCategoryItem from "../../../../../Models/VehicleCategoryItem";

function FleetItem(props: VehicleCategoryItem): JSX.Element {
    return (
        <NavLink to={props.vehicleCategoryRedirectPath} className="FleetItem">
            <img src={require("../../../../../Assets/Images/" + props.vehicleCategoryImgName)} alt="" />
            {props.vehicleCategoryName}
        </NavLink>
    );
}

export default FleetItem;
