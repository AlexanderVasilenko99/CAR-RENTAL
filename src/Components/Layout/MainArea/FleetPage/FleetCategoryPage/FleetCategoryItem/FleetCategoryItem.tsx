import { NavLink } from "react-router-dom";
import FleetCategoryItemModel from "../../../../../../Models/FleetCategoryItemModel";
import "./FleetCategoryItem.css";
import appConfig from "../../../../../../Utils/AppConfig";

function FleetCategoryItem(props: FleetCategoryItemModel): JSX.Element {
    return (
        <div className="FleetCategoryItem">
            <div className="imgHolder">
                <img src={require(`../../../../../../Assets/Images/${props.imageName}`)} />
            </div>
            <h1>{props.vehicleName}</h1>
            <div className="stats">
                <div className="initialStats">
                    <div>
                        <img src={require(`../../../../../../Assets/Images/transmissionicon.png`)} />
                        {props.transmission}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/personicon.png`)} />
                        {props.passengers}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/cardooricon.png`)} />
                        {props.doors}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/suitcaseicon.png`)} />
                        {props.luggage}
                    </div>
                </div>
                <div className="moreStats">
                    <div>
                        <img src={require(`../../../../../../Assets/Images/trunkicon.png`)} />
                        Storage: {props.trunkCapacity}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/fuelpumpicon.png`)} />
                        Fuel: {props.fuel}
                    </div>
                    <div>
                        <img src={require(`../../../../../../Assets/Images/gascanicon.png`)} />
                        Tank Capacity: {props.tankCapacity}
                    </div>
                    {props.radio && <div>
                        <img src={require(`../../../../../../Assets/Images/radioicon.png`)} />
                        Radio
                    </div>}
                    {props.airConditioning && <div>
                        <img src={require(`../../../../../../Assets/Images/snowflake.png`)} />
                        Air Conditioning
                    </div>}
                </div>
                <div className="btnHolder"><NavLink to={appConfig.samePagePath}>View Availability</NavLink></div>
            </div>
        </div>
    );
}

export default FleetCategoryItem;
