import { Navigate, Route, Routes } from "react-router-dom";
import FleetPage from "../FleetPage/FleetPage";
import HomePage from "../HomePage/HomePage";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./MyRouter.css";
import appConfig from "../../../../Utils/AppConfig";
import CareersPage from "../CareersPage/CareersPage";
import HelpPage from "../HelpPage/HelpPage";
import SignInPage from "../SignInPage/SignInPage";
import LocationsPage from "../LocationsPage/LocationsPage";
import ServicesPage from "../ServicesPage/ServicesPage";
import FleetCategoryPage from "../FleetPage/CategoryPage/CategoryPage";
import TelAviv from "../LocationsPage/TelAviv/TelAviv";
import Jerusalem from "../LocationsPage/Jerusalem/Jerusalem";
import BenGurion from "../LocationsPage/BenGurion/BenGurion";
import Haifa from "../LocationsPage/Haifa/Haifa";
import BeerSheva from "../LocationsPage/BeerSheva/BeerSheva";
import Raanana from "../LocationsPage/Raanana/Raanana";
import Tiberias from "../LocationsPage/Tiberias/Tiberias";
import Eilat from "../LocationsPage/Eilat/Eilat";
import Ramon from "../LocationsPage/Ramon/Ramon";



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


                <Route path="/*" element={<PageNotFound />}></Route>

            </Routes>
        </div>
    );
}

export default Router;
