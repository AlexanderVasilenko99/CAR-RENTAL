import { NavLink } from "react-router-dom";
import NavbarItemModel from "../../../../Models/NavbarItemModel";
import "./NavbarItem.css";

function NavbarItem(props: NavbarItemModel): JSX.Element {
    return (
        <NavLink to={props.itemDestinationPagePath} className="NavbarItem">
            <li>{props.itemSvgComponent}|&nbsp;{props.itemText}</li>
            {props.isDropdown &&
                <div className="NavbarItemDropdownContent">
                    {props.firstSubItemHeading &&
                        <NavLink to={props.firstSubItemRedirectPath}>{props.firstSubItemHeading}</NavLink>}
                    {props.secondSubItemHeading &&
                        <NavLink to={props.secondSubItemRedirectPath}>{props.secondSubItemHeading}</NavLink>}
                    {props.thirdSubItemHeading &&
                        <NavLink to={props.thirdSubItemRedirectPath}>{props.thirdSubItemHeading}</NavLink>}
                    {props.fourthSubItemHeading &&
                        <NavLink to={props.fourthSubItemRedirectPath}>{props.fourthSubItemHeading}</NavLink>}
                    {props.fifthSubItemHeading &&
                        <NavLink to={props.fifthSubItemRedirectPath}>{props.fifthSubItemHeading}</NavLink>}
                    {props.sixthSubItemHeading &&
                        <NavLink to={props.sixthSubItemRedirectPath}>{props.sixthSubItemHeading}</NavLink>}
                    {props.seventhSubItemHeading &&
                        <NavLink to={props.seventhSubItemRedirectPath}>{props.seventhSubItemHeading}</NavLink>}
                    {props.eightSubItemHeading &&
                        <NavLink to={props.eightSubItemRedirectPath}>{props.eightSubItemHeading}</NavLink>}
                    {props.ninthSubItemHeading &&
                        <NavLink to={props.ninthSubItemRedirectPath}>{props.ninthSubItemHeading}</NavLink>}
                    {props.tenthSubItemHeading &&
                        <NavLink to={props.tenthSubItemRedirectPath}>{props.tenthSubItemHeading}</NavLink>}
                </div>
            }
        </NavLink>
    );
}

export default NavbarItem;
