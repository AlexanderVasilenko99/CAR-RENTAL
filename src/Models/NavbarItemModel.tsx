import { SubNavItem } from "./SubNavItem";
class NavbarItemModel {
    public itemText: string;
    public itemDestinationPagePath: string;
    public itemSvgComponent: any;
    public isDropdown?: boolean = false;
    public subNavItems?: SubNavItem[];
}
export default NavbarItemModel;