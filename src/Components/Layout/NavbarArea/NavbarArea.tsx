import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import PersonIcon from '@mui/icons-material/Person';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { NavLink } from "react-router-dom";
import appConfig from "../../../Utils/AppConfig";
import "./NavbarArea.css";
// import navbarLogo from "../../../Assets/Images/navbar-logo.png";
// import navbarLogo from "../../../Assets/Images"
import { useState } from "react";
import 'react-dropdown/style.css';
import Modal from 'react-modal';
import { SubNavItem } from '../../../Models/SubNavItem';
import SearchForm from '../MainArea/HomePage/SearchForm/SearchForm';
import SignInForm from '../MainArea/SignInPage/SignInForm/SignInForm';
import NavbarItem from './NavbarItem/NavbarItem';

const fleetSubNavItems: SubNavItem[] = [
    new SubNavItem('Small', appConfig.fleetPageSmallPath),
    new SubNavItem('Medium', appConfig.fleetPageMediumPath),
    new SubNavItem('Large', appConfig.fleetPageLargePath),
    new SubNavItem('Suv & Off Road', appConfig.fleetPageSuvOffRoadPath),
    new SubNavItem('Luxury', appConfig.fleetPageLuxuryPath),
    new SubNavItem('Motorcycles & Scooters', appConfig.fleetPageMotorcyclesScootersPath),
    new SubNavItem('Vans & Trucks', appConfig.fleetPageVansTrucksPath),
    new SubNavItem('All Vehicles', appConfig.fleetPageAllVehiclesPath),
];
const servicesSubNavItems: SubNavItem[] = [
    new SubNavItem('Vehicle Rental', appConfig.fleetPagePath),
    new SubNavItem('Monthly Rental', appConfig.servicesMonthlyRentalPagePath),
    new SubNavItem('Business Rental', appConfig.servicesBusinessRentalPagePath),
    new SubNavItem('Chauffeur Services', appConfig.servicesChauffeurPagePath),
    new SubNavItem('Group Car Rental', appConfig.servicesGroupRentalPagePath),
    new SubNavItem('One Day Car Rental', appConfig.servicesOneDayRentalPagePath),
    new SubNavItem('One Way Car Rental', appConfig.servicesOneWayRentalPagePath),
    new SubNavItem('All Services', appConfig.servicesPagePath),
];
const locationsSubNavItems: SubNavItem[] = [
    new SubNavItem('Israel', appConfig.locationsPagePath),
];



function NavbarArea(): JSX.Element {
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    function openModal(): void {
        setIsOpen(true);
    }

    function closeModal(): void {
        setIsOpen(false);
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            padding: 0,

            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },

    };
    return (
        <div className="NavbarArea">
            <ul>
                <NavLink to={appConfig.homePagePath} className="logo">
                    <li><img src={require("../../../Assets/Images/navbar-logo-1-min.png")} alt="brokenLogo" /></li>
                </NavLink>
                <div onClick={closeModal}>
                    <a className="NavbarItem searchItem">
                        <SearchIcon />Search
                        <div className="SearchDropdownContent" >
                            <div className='searchFormContainer'>
                                <SearchForm />
                            </div>
                        </div>
                    </a>
                </div>
                {/* <NavbarItem itemText='Search' itemDestinationPagePath={appConfig.samePagePath} itemSvgComponent={<SearchIcon />} /> */}
                <div onClick={closeModal}>
                    <NavbarItem isDropdown
                        itemText='Fleet' itemDestinationPagePath={appConfig.fleetPagePath}
                        subNavItems={fleetSubNavItems}
                        itemSvgComponent={<DirectionsCarOutlinedIcon />} />
                </div>
                <div onClick={closeModal}>
                    <NavbarItem isDropdown itemText='Services' itemDestinationPagePath={appConfig.servicesPagePath}
                        subNavItems={servicesSubNavItems}
                        itemSvgComponent={< ManageSearchOutlinedIcon />} />
                </div>
                <div onClick={closeModal}>
                    <NavbarItem isDropdown itemText='Locations' itemDestinationPagePath={appConfig.locationsPagePath}
                        subNavItems={locationsSubNavItems}
                        itemSvgComponent={<PlaceOutlinedIcon />} />
                </div>
                <div onClick={closeModal}>
                    <NavbarItem itemText='Careers' itemDestinationPagePath={appConfig.careersPagePath} itemSvgComponent={<WorkOutlineIcon />} />
                </div>
                <div onClick={closeModal}>
                    <NavbarItem itemText='Help' itemDestinationPagePath={appConfig.helpPagePath} itemSvgComponent={<HelpOutlineIcon />} />
                </div>
                <div onClick={() => setIsOpen(!modalIsOpen)} id='sighIn'>
                    <NavbarItem itemText='Sign in' itemDestinationPagePath={appConfig.samePagePath} itemSvgComponent={<PersonIcon />} />
                </div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}>
                    <SignInForm />
                </Modal>
            </ul>
        </div>
    );
}

export default NavbarArea;
