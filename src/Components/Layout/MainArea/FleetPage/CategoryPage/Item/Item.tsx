import { NavLink } from "react-router-dom";
import FleetCategoryItemModel from "../../../../../../Models/FleetCategoryItemModel";
import appConfig from "../../../../../../Utils/AppConfig";
import "./Item.css";

function FleetCategoryItem(props: FleetCategoryItemModel): JSX.Element {
    return (
        <div className="Item">
            <div className="imgHolder">
                <img src={require(`../../../../../../Assets/Images/Fleet/Vehicles/${props.imageName}`)} />
            </div>
            <h1>{props.vehicleName}</h1>
            <div className="stats">
                <div className="initialStats">
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/transmissionicon.png`)} />
                        {props.transmission}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/personicon.png`)} />
                        {props.passengers}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/cardooricon.png`)} />
                        {props.doors}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/suitcaseicon.png`)} />
                        {props.luggage}
                    </div>
                </div>
                <div className="moreStats">
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/trunkicon.png`)} />
                        Storage: {props.trunkCapacity}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/fuelpumpicon.png`)} />
                        Fuel: {props.fuel}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/gascanicon.png`)} />
                        Tank Capacity: {props.tankCapacity}
                    </div>
                    {props.radio && <div>
                        <img src={require(`../../../../../../Assets/Images/Fleet/Icons/radioicon.png`)} />
                        Radio
                    </div>}
                    {props.airConditioning && <div>
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
