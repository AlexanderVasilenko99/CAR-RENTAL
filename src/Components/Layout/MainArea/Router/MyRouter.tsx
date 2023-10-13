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
import FleetCategoryPage from "../FleetPage/FleetCategoryPage/CategoryPage";



function Router(): JSX.Element {
    return (
        <div className="MyRouter">
            <Routes>
                {/* Default Route */}
                <Route path="/" element={<Navigate to={"/home"} />}></Route>

                <Route path={appConfig.homePagePath} element={<HomePage />} />
                <Route path={appConfig.fleetPagePath} element={< FleetPage />} />
                <Route path={appConfig.fleetPagePath+":vehicleCategory"} element={< FleetCategoryPage />} />

                <Route path={appConfig.locationsPagePath} element={< LocationsPage />} />
                <Route path={appConfig.careersPagePath} element={< CareersPage />} />
                <Route path={appConfig.helpPagePath} element={<  HelpPage/>} />
                <Route path={appConfig.signInPagePath} element={<  SignInPage/>} />
                <Route path={appConfig.servicesPagePath} element={<  ServicesPage/>} />


                <Route path="/*" element={<PageNotFound />}></Route>

            </Routes>
        </div>
    );
}

export default Router;
