import { Navigate, Route, Routes } from "react-router-dom";
import appConfig from "../../../../Utils/AppConfig";
import CareersPage from "../CareersPage/CareersPage";
import FleetCategoryPage from "../FleetPage/CategoryPage/CategoryPage";
import FleetPage from "../FleetPage/FleetPage";
import HelpPage from "../HelpPage/HelpPage";
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
import ServicesPage from "../ServicesPage/ServicesPage";
import SignInPage from "../SignInPage/SignInPage";
import "./MyRouter.css";
import BusinessRental from "../ServicesPage/BusinessRental/BusinessRental";
import MonthlyRental from "../ServicesPage/MonthlyRental/MonthlyRental";
import Chauffeur from "../ServicesPage/Chauffeur/Chauffeur";
import GroupRental from "../ServicesPage/GroupRental/Chauffeur";
import OneDay from "../ServicesPage/OneDay/OneDay";



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
                <Route path={appConfig.signInPagePath} element={<  SignInPage />} />

                <Route path={appConfig.servicesPagePath} element={<  ServicesPage />} />
                <Route path={appConfig.servicesBusinessRentalPagePath} element={<  BusinessRental />} />
                <Route path={appConfig.servicesMonthlyRentalPagePath} element={<  MonthlyRental />} />
                <Route path={appConfig.servicesChauffeurPagePath} element={<  Chauffeur />} />
                <Route path={appConfig.servicesGroupRentalPagePath} element={<  GroupRental />} />
                <Route path={appConfig.servicesOneDayRentalPagePath} element={<  OneDay />} />


                <Route path="/*" element={<PageNotFound />}></Route>

            </Routes>
        </div>
    );
}

export default Router;
