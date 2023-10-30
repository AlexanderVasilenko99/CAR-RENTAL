import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { NavLink } from "react-router-dom";
import { HelpItemModel } from "../../../../../Models/HelpItemModel";
import "./HelpItem.css";

function HelpItem(props: HelpItemModel): JSX.Element {
    return (
        <NavLink to={props.redirectPath} className="HelpItem">
            <h3>{props.header}</h3>
            <p>{props.text}</p>
            <div className="HelpItemLink">
                <span>Learn More<ChevronRightOutlinedIcon /></span>
            </div>
        </NavLink>
    );
}

export default HelpItem;
