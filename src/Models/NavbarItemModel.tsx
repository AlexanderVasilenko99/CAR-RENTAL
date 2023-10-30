import { subNavItem } from "./subNavItem";

class NavbarItemModel {
    public itemText: string;
    public itemDestinationPagePath: string;
    public itemSvgComponent: any;
    public isDropdown?: boolean = false;
    public subNavItems?: subNavItem[];
}
export default NavbarItemModel;