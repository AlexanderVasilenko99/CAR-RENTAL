import { HashLink } from "react-router-hash-link";
import appConfig from "../../../../../Utils/AppConfig";
import Header from "../Header/Header";
import "./Chauffeur.css";
import LinkTree from "../LinkTree/LinkTree";


function Chauffeur(): JSX.Element {
    return (
        <div className="Chauffeur">
            <div id="header">
                <div className="img-container">
                    <img src={require("../../../../../Assets/Images/oneday2.png")} />
                    <div className="img-container-content">
                        <div>
                            <h1>Chauffeur Services</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-container">
                <div className="link-tree-container">
                    <div className="link-tree">
                        <h3>Summary</h3>
                        <ul>
                            <HashLink smooth to={appConfig.samePagePath + "aboutservice"}><li>About The Service</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "whoisitfor"}><li>Who Is The Service For?</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "howitworks"}><li>How Does It Work?</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "taxesandwriteoff"}><li>Taxes & Business Write Off</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "welcomebonus"}><li>Welcome Bonus!</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "contactus"}><li>Contact Us</li></HashLink>
                        </ul>
                        <h3>See Also</h3>
                        <LinkTree />
                    </div>
                </div>
                <div className="content">

                    <h3 id="aboutservice">About The  Service</h3>
                    <p>Make this page more luxurious</p>

                    <h3 id="whoisitfor">Who Is The Service For?</h3>
                    <p></p>

                    <h3 id="howitworks">How Does It Work?</h3>
                    <p></p>

                    <h3 id="taxesandwriteoff">Taxes & Business Write Off</h3>
                    <p></p>

                    <h3 id="welcomebonus">Welcome Bonus!</h3>
                    <p></p>

                    <h3 id="contactus">Contact Us!</h3>
                    <p>form</p>

                </div>
            </div>
            <Header />
        </div>
    );
}

export default Chauffeur;
