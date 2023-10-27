import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { NavLink } from 'react-router-dom';
import LocationItemAccordionModel from "../../../../../../Models/LocationItemAccordionModel";
import "./Accordion.css";

function Accordion(params: LocationItemAccordionModel): JSX.Element {
    return (
        <div className="Accordion">
            <div className="LocationParameter">
                <div className="svgAndHeading">
                    <PlaceOutlinedIcon />Address:<br />
                </div>
                <div className="locationText">{params.address}</div>
            </div>
            <div className="LocationParameter">
                <div className="svgAndHeading">
                    <AccessTimeIcon />Working Hours:
                </div>
                <div className="locationText workingHours">
                    <span>Sun - Fri:</span>
                    <span>&nbsp;&nbsp;&nbsp;8AM -10PM</span>
                    <span>Sat:</span>
                    <span>10AM - 10PM</span>
                </div>
            </div>
            <div className="LocationParameter">
                <div className="svgAndHeading">
                    <LocalPhoneOutlinedIcon />Phone Number:
                </div>
                <div className="locationText">+972508145431<br />&nbsp;&nbsp;&nbsp;050-814-5431</div>
            </div >
            <div className="LocationParameter">
                <div className="svgAndHeading">
                    <MailOutlineOutlinedIcon />Mails:
                </div >
                <div className="locationText">{params.email}<br />Alexandervjr1@gmail.com</div>
                {/* <button className='btn'>All location details</button> */}
                <NavLink to={params.redirectPath} className='btn'>
                    All location details
                </NavLink>
            </div>
        </div>
    );
}

export default Accordion;
