import FooterArea from "./FooterArea/FooterArea";
import "./Layout.css";
import MyRouter from "./MainArea/Router/MyRouter";
import ScrollToTop from "./MainArea/ScrollToTop/ScrollToTop";
import NavbarArea from "./NavbarArea/NavbarArea";


function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <ScrollToTop />
            <nav><NavbarArea /></nav>
            <main><MyRouter /></main>
            <footer><FooterArea /></footer>
        </div>
    );
}

export default Layout;
