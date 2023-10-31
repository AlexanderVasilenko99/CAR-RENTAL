import { Navigate, Route, Routes } from "react-router-dom";
import appConfig from "../../../../Utils/AppConfig";
import CareersPage from "../CareersPage/CareersPage";
import FleetCategoryPage from "../FleetPage/CategoryPage/CategoryPage";
import FleetPage from "../FleetPage/FleetPage";
import ClaimsAndForms from "../HelpPage/ClaimsAndForms/ClaimsAndForms";
import CustomerService from "../HelpPage/CustomerService/CustomerService";
import Disability from "../HelpPage/Disability/Disability";
import FAQ from "../HelpPage/FAQ/FAQ";
import HelpPage from "../HelpPage/HelpPage";
import Info from "../HelpPage/Info/Info";
import LostFound from "../HelpPage/LostFound/LostFound";
import LoyaltyProgram from "../HelpPage/LoyaltyProgram/LoyaltyProgram";
import PastRentals from "../HelpPage/PastRentals/PastRentals";
import TermsAndConditions from "../HelpPage/TermsAndConditions/TermsAndConditions";
import HomePage from "../HomePage/HomePage";
import BeerSheva from "../LocationsPage/BeerSheva/BeerSheva";
import BenGurion from "../LocationsPage/BenGurion/BenGurion";
import Eilat from "../LocationsPage/Eilat/Eilat";
import Haifa from "../LocationsPage/Haifa/Haifa";
import Jerusalem from "../LocationsPage/Jerusalem/Jerusalem";
import LocationsPage from "../LocationsPage/LocationsPage";
import Raanana from "../LocationsPage/Raanana/Raanana";
import Ramon from "../LocationsPage/Ramon/Ramon";
import TelAviv from "../LocationsPage/TelAviv/TelAviv";
import Tiberias from "../LocationsPage/Tiberias/Tiberias";
import PageNotFound from "../PageNotFound/PageNotFound";
import BusinessRental from "../ServicesPage/BusinessRental/BusinessRental";
import Chauffeur from "../ServicesPage/Chauffeur/Chauffeur";
import GroupRental from "../ServicesPage/GroupRental/GroupRental";
import MonthlyRental from "../ServicesPage/MonthlyRental/MonthlyRental";
import OneDay from "../ServicesPage/OneDay/OneDay";
import OneWay from "../ServicesPage/OneWay/OneWay";
import ServicesPage from "../ServicesPage/ServicesPage";
import SignInPage from "../SignInPage/SignInPage";
import "./MyRouter.css";

function Router(): JSX.Element {
    return (
        <div className="MyRouter">
            <Routes>
                {/* Default Route */}
                <Route path="/" element={<Navigate to={"/home"} />}></Route>
                <Route path="/car-rental/" element={<Navigate to={"/home"} />}></Route>

                <Route path={appConfig.homePagePath} element={<HomePage />} />
                <Route path={appConfig.fleetPagePath} element={< FleetPage />} />
                <Route path={appConfig.fleetPagePath + ":vehicleCategory"} element={< FleetCategoryPage />} />

                <Route path={appConfig.locationsPagePath} element={< LocationsPage />} />
                <Route path={appConfig.locationsTelAvivPath} element={< TelAviv />} />
                <Route path={appConfig.locationsJerusalemPath} element={< Jerusalem />} />
                <Route path={appConfig.locationsBenGurionPath} element={< BenGurion />} />
                <Route path={appConfig.locationsHaifaPath} element={< Haifa />} />
                <Route path={appConfig.locationsBeerShevaPath} element={< BeerSheva />} />
                <Route path={appConfig.locationsRaananaPath} element={< Raanana />} />
                <Route path={appConfig.locationsTiberiasPath} element={< Tiberias />} />
                <Route path={appConfig.locationsEilatPath} element={< Eilat />} />
                <Route path={appConfig.locationsEilatRamonPath} element={< Ramon />} />

                <Route path={appConfig.careersPagePath} element={< CareersPage />} />

                <Route path={appConfig.helpPagePath} element={<  HelpPage />} />
                <Route path={appConfig.helpPageClaimsAndFormsPagePath} element={<  ClaimsAndForms />} />
                <Route path={appConfig.helpPageCustomerServicePagePath} element={<  CustomerService />} />
                <Route path={appConfig.helpPageDisabilityPagePath} element={<  Disability />} />
                <Route path={appConfig.helpPageFAQPagePath} element={<  FAQ />} />
                <Route path={appConfig.helpPageInfoPagePath} element={<  Info />} />
                <Route path={appConfig.helpPageLostFoundPagePath} element={<  LostFound />} />
                <Route path={appConfig.helpPagePastRentalsPagePath} element={<  PastRentals />} />
                <Route path={appConfig.helpPageTermsConditionsPagePath} element={<  TermsAndConditions />} />

                <Route path={appConfig.LoyaltyProgramPagePath} element={<  LoyaltyProgram />} />


                <Route path={appConfig.signInPagePath} element={<  SignInPage />} />

                <Route path={appConfig.servicesPagePath} element={<  ServicesPage />} />
                <Route path={appConfig.servicesBusinessRentalPagePath} element={<  BusinessRental />} />
                <Route path={appConfig.servicesMonthlyRentalPagePath} element={<  MonthlyRental />} />
                <Route path={appConfig.servicesChauffeurPagePath} element={<  Chauffeur />} />
                <Route path={appConfig.servicesGroupRentalPagePath} element={<  GroupRental />} />
                <Route path={appConfig.servicesOneDayRentalPagePath} element={<  OneDay />} />
                <Route path={appConfig.servicesOneWayRentalPagePath} element={<  OneWay />} />


                <Route path="/*" element={<PageNotFound />}></Route>

            </Routes>
        </div>
    );
}

export default Router;
