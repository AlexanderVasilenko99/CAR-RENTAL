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
import 'react-dropdown/style.css';
import { useForm } from 'react-hook-form';
import NavbarItem from './NavbarItem/NavbarItem';


import { useState } from "react";
import Modal from 'react-modal';


import SignInForm from '../MainArea/SignInPage/SignInForm/SignInForm';


function NavbarArea(): JSX.Element {
    const { register, handleSubmit } = useForm();
    function search2(params: any) {
        console.log("nigger2");
        console.log(params);
    }
    const [modalIsOpen, setIsOpen] = useState<boolean>(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
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
                    <NavLink to={appConfig.samePagePath} className="NavbarItem searchItem"><SearchIcon />Search
                        <div className="SearchDropdownContent">
                            <h2>Find your next car rental here!</h2>
                            <div className='searchFormContainer'>
                                <form onSubmit={handleSubmit(search2)}>
                                    <div>
                                        <input type="text" placeholder='Pickup Location' {...register("pickupLocation")} />
                                    </div>
                                    <div>
                                        <label></label><input type="date" {...register("pickupDate")} />
                                        <input type="time" {...register("pickupTime")} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder='Drop off Location' {...register("dropOffLocation")} />
                                    </div>
                                    <div>
                                        <label></label><input type="date" {...register("dropOffDate")} />
                                        <input type="time" {...register("dropOffTime")} />
                                    </div>
                                    <div>
                                        <select name="" {...register("age")}>
                                            <option value="all" selected disabled>Drivers Age</option>
                                            <option value="7000">All</option>
                                            <option value="1823">18-23</option>
                                            <option value="2346">23-46</option>
                                            <option value="4670">46-70</option>
                                            <option value="7000">70+</option>
                                        </select>
                                        <select name="" {...register("category")}>
                                            <option value="all" selected disabled>Vehicle Category</option>
                                            <option value="all">All</option>
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                            <option value="luxury">Luxury</option>
                                            <option value="suv&offroad">Suv & Off Road</option>
                                            <option value="motorcycles&scooters">Motorcycles & Scooters</option>
                                            <option value="vans&trucks">Vans & Trucks</option>
                                        </select>
                                        <div>
                                            <label htmlFor="checkboxLoyalty">Loyalty program member?</label>
                                            <input id='checkboxLoyalty' type="checkbox" {...register("isLoyal")} />
                                        </div>
                                    </div>
                                    <button type='submit'>Find my rental!</button>
                                </form>
                            </div>
                        </div>
                    </NavLink>
                </div>
                {/* <NavbarItem itemText='Search' itemDestinationPagePath={appConfig.samePagePath} itemSvgComponent={<SearchIcon />} /> */}
                <div onClick={closeModal}>
                    <NavbarItem isDropdown itemText='Fleet' itemDestinationPagePath={appConfig.fleetPagePath}
                        firstSubItemHeading='Small' firstSubItemRedirectPath={appConfig.fleetPageSmallPath}
                        secondSubItemHeading='Medium' secondSubItemRedirectPath={appConfig.fleetPageMediumPath}
                        thirdSubItemHeading='Large' thirdSubItemRedirectPath={appConfig.fleetPageLargePath}
                        fourthSubItemHeading='Suv & Off Road' fourthSubItemRedirectPath={appConfig.fleetPageSuvOffRoadPath}
                        fifthSubItemHeading='Luxury' fifthSubItemRedirectPath={appConfig.fleetPageLuxuryPath}
                        sixthSubItemHeading='Motorcycles & Scooters' sixthSubItemRedirectPath={appConfig.fleetPageMotorcyclesScootersPath}
                        seventhSubItemHeading='Vans & Trucks' seventhSubItemRedirectPath={appConfig.fleetPageVansTrucksPath}
                        eightSubItemHeading='All Vehicles' eightSubItemRedirectPath={appConfig.fleetPageAllVehiclesPath}
                        itemSvgComponent={<DirectionsCarOutlinedIcon />} />
                </div>
                <div onClick={closeModal}>
                    <NavbarItem isDropdown itemText='Services' itemDestinationPagePath={appConfig.servicesPagePath}
                        firstSubItemHeading='Vehicle Rental'
                        firstSubItemRedirectPath={appConfig.fleetPagePath}
                        secondSubItemHeading='Monthly Rental'
                        secondSubItemRedirectPath={appConfig.servicesMonthlyRentalPagePath}
                        thirdSubItemHeading='Business Rental'
                        thirdSubItemRedirectPath={appConfig.servicesBusinessRentalPagePath}
                        fourthSubItemHeading='Chauffeur Services'
                        fourthSubItemRedirectPath={appConfig.servicesChauffeurPagePath}
                        fifthSubItemHeading='Group Car Rental'
                        fifthSubItemRedirectPath={appConfig.servicesGroupRentalPagePath}
                        sixthSubItemHeading='One Day Car Rental'
                        sixthSubItemRedirectPath={appConfig.servicesPagePath}
                        seventhSubItemHeading='One Way Car Rental'
                        seventhSubItemRedirectPath={appConfig.servicesPagePath}
                        eightSubItemHeading='All Services'
                        eightSubItemRedirectPath={appConfig.servicesPagePath}
                        itemSvgComponent={< ManageSearchOutlinedIcon />} />
                </div>
                <div onClick={closeModal}>
                    <NavbarItem isDropdown itemText='Locations' itemDestinationPagePath={appConfig.locationsPagePath}
                        firstSubItemHeading='Israel' firstSubItemRedirectPath={appConfig.locationsPagePath}
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
