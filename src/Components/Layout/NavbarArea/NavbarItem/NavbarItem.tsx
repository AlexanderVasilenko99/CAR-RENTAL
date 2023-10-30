import { NavLink } from "react-router-dom";
import NavbarItemModel from "../../../../Models/NavbarItemModel";
import "./NavbarItem.css";
import { subNavItem } from "../../../../Models/subNavItem";

function NavbarItem(props: NavbarItemModel): JSX.Element {
    // console.log(props.subNavItems);
    let arr: subNavItem[] = props.subNavItems;
    return (
        <NavLink to={props.itemDestinationPagePath} className="NavbarItem">
            <li>{props.itemSvgComponent}|&nbsp;{props.itemText}</li>
            {props.isDropdown &&
                <div className="NavbarItemDropdownContent" >
                    {arr?.map(i => <div>
                        <NavLink to={i.subNavItemRedirectPath}>{i.subNavItemHeading}</NavLink>
                    </div>
                    )};
                </div>
            }
        </NavLink >
    );
}

export default NavbarItem;
