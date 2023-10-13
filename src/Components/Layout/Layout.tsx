import { Router } from "react-router-dom";
import FooterArea from "./FooterArea/FooterArea";
import "./Layout.css";
import HomePage from "./MainArea/HomePage/HomePage";
import MyRouter from "./MainArea/Router/MyRouter";
import NavbarArea from "./NavbarArea/NavbarArea";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<nav><NavbarArea /></nav>
            <main><MyRouter /></main>
            <footer><FooterArea /></footer>
        </div>
    );
}

export default Layout;
