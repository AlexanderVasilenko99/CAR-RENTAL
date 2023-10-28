import { HashLink } from "react-router-hash-link";
import appConfig from "../../../../../Utils/AppConfig";
import Header from "../Header/Header";
import "./GroupRental.css";
import { NavLink } from "react-router-dom";
import LinkTree from "../LinkTree/LinkTree";


function GroupRental(): JSX.Element {
    return (
        <div className="GroupRental">
            <div id="header">
                <div className="img-container">
                    <img src={require("../../../../../Assets/Images/Services/group2.png")} />
                    <div className="img-container-content">
                        <div>
                            <h1>Group Car Rental</h1>
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
                            <HashLink smooth to={appConfig.samePagePath + "businessclient"}><li>Business Client?</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "howitworks"}><li>How Does It Work?</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "taxesandwriteoff"}><li>Taxes & Business Write Off</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "contactus"}><li>Contact Us</li></HashLink>
                        </ul>
                        <h3>See Also</h3>
                        <LinkTree />
                    </div>
                </div>
                <div className="content">

                    <h3 id="aboutservice">About The  Service</h3>
                    <p>Planning a trip with a large group? Whether you're organizing a family reunion, a corporate retreat, or a
                        special event, Vasilenko Car Rental is here to accommodate your group car rental needs. Our Group Car
                        Rental Services are designed to make your journey smooth, efficient, and cost-effective. We offer a wide
                        range of vehicles to suit groups of all sizes, and our commitment to exceptional customer service ensures
                        your group's transportation experience is hassle-free. From reliable transportation for family get-togethers
                        to coordinating logistics for corporate events, we've got you covered.</p>

                    <h3 id="whoisitfor">Who Is The Service For?</h3>
                    <p>Our Group Car Rental program at Vasilenko Car Rental is designed with the needs of various customer groups
                        in mind. Whether you're a wedding planner coordinating transportation for a large bridal party, a tour
                        organizer responsible for keeping your travelers comfortable, or a corporate event manager tasked with
                        ensuring efficient mobility for attendees, our program is tailored for you. We also cater to sports teams,
                        school groups, and any other organizations or individuals looking for seamless and convenient group
                        transportation. Our extensive fleet can accommodate groups of all sizes, and our commitment to top-notch
                        customer service ensures that your group's transportation experience is not only comfortable but also
                        memorable. At Vasilenko Car Rental, we're dedicated to making group travel hassle-free, no matter the
                        occasion.</p>

                    <h3 id="businessclient">Business Client?</h3>
                    <p>If you're a business client looking to arrange transportation for your team or special events, consider
                        exploring our dedicated Business Car Rental Services. We offer tailored solutions, competitive rates,
                        and special bonuses for corporate clients. To learn more about how our business program can benefit your
                        company, click <NavLink to={"#"}>HERE</NavLink> or contact our corporate services team at
                        <NavLink to={"#"}>HERE</NavLink></p>


                    <h3 id="howitworks">How Does It Work?</h3>
                    <p>The process is very simple. It contains of only three steps and usually takes 1-2 business days.</p>
                    <div className="howitworks-img-container">
                        <img src={require("../../../../../Assets/Images/Services/grouprentalsteps2.png")} />
                    </div>

                    <h3 id="taxesandwriteoff">Taxes & Business Write Off</h3>
                    <p>At Vasilenko Car Rental, we're here to help you navigate the financial aspects of your car rental needs. One of
                        the advantages of partnering with us is the potential for valuable tax deductions and business write-offs.
                        Depending on your business structure and the nature of your rentals, you may be eligible to claim a portion
                        of your car rental expenses as a tax deduction. By doing so, you can reduce your taxable income and ultimately
                        lower your tax liability. It's a smart way to manage your finances and maximize savings while providing
                        essential transportation for your business needs. Always consult with your accountant or tax advisor to
                        understand how our car rental services can work to your advantage in your specific financial situation.</p>

                    <p id="p-m">We understand the importance of seamless transportation for both group and business clients,
                        and we're ready to assist you with your specific requirements. Whether you're traveling with a group or
                        seeking corporate solutions, Vasilenko Car Rental is your trusted partner for all your car rental needs.</p>

                    <h3 id="contactus">Contact Us!</h3>
                    <p>form</p>

                </div>
            </div>
            <Header />
        </div>
    );
}

export default GroupRental;
