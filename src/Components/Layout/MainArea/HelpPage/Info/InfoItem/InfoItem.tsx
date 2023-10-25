import { NavLink } from "react-router-dom";
import InfoItemModel from "../../../../../../Models/InfoItemModel";
import "./InfoItem.css";

function InfoItem(props: InfoItemModel): JSX.Element {
    return (
        <div className='InfoItem'>
            <NavLink to={props.redirectPath} className="row-item" target="_blank">
                <img src={require(`../../../../../../Assets/Images/HelpPage/Articles/${props.imageName}`)} />
                <h2>{props.header}</h2>
                <p>{props.content}</p>
            </NavLink>
        </div>
    );
}

export default InfoItem;
