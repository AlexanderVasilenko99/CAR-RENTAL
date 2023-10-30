import { NavLink } from "react-router-dom";
import VehicleModel from "../../../../../../Models/VehicleModel";
import appConfig from "../../../../../../Utils/AppConfig";
import "./Item.css";

function FleetCategoryItem(props: VehicleModel): JSX.Element {
    return (
        <div className="Item">
            <div className="imgHolder">
                <img src={require(`../../../../../../Assets/Images/Fleet/Vehicles/${props.image_name}`)} />
            </div>
            <h1>{props.full_name}</h1>
            <div className="stats">
                <div className="initialStats">
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/transmissionicon.png`)} />
                        {props.transmission}
                    </div>
                    {props.seats && <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/personicon.png`)} />
                        {props.seats}
                    </div>}
                    {props.doors && <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/cardooricon.png`)} />
                        {props.doors}
                    </div>}
                    {props.luggage && <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/suitcaseicon.png`)} />
                        {props.luggage}
                    </div>}
                    {props.luggage_available && <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/suitcaseicon.png`)} />
                        Optional Luggage
                    </div>}
                </div>
                <div className="moreStats">
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/trunkicon.png`)} />
                        Storage: {props.trunk_capacity}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/fuelpumpicon.png`)} />
                        Fuel: {props.fuel}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/gascanicon.png`)} />
                        Tank Capacity: {props.tank_capacity}
                    </div>
                    {props.radio && <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/radioicon.png`)} />
                        Radio
                    </div>}
                    {props.air_conditioner && <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/snowflake.png`)} />
                        Air Conditioning
                    </div>}
                </div>
                <div className="btnHolder"><NavLink to={appConfig.samePagePath}>View Availability</NavLink></div>
            </div>
        </div>
    );
}

export default FleetCategoryItem;
