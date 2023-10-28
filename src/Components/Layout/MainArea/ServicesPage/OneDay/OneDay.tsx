import { HashLink } from "react-router-hash-link";
import appConfig from "../../../../../Utils/AppConfig";
import Header from "../Header/Header";
import LinkTree from "../LinkTree/LinkTree";
import "./OneDay.css";


function OneDay(): JSX.Element {
    return (
        <div className="OneDay">
            <div id="header">
                <div className="img-container">
                    <img src={require("../../../../../Assets/Images/Services/oneday3.png")} />
                    <div className="img-container-content">
                        <div>
                            <h1>One Day Car Rental</h1>
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
                            <HashLink smooth to={appConfig.samePagePath + "contactus"}><li>Contact Us</li></HashLink>
                        </ul>
                        <h3>See Also</h3>
                        <LinkTree />
                    </div>
                </div>
                <div className="content">

                    <h3 id="aboutservice">About The  Service</h3>
                    <p>At Vasilenko Car Rental, we understand that not all journeys require an extended commitment. That's why
                        we offer our convenient One-Day Car Rental service, designed to cater to your specific schedule. With
                        options ranging from 12 hours, 18 hours, to a full 24 hours, you have the flexibility to choose the
                        duration that suits your needs best. Whether you're a local resident looking to run errands, a traveler
                        exploring a new city, or someone in need of a reliable vehicle for a full day, our one-day rental
                        programs have you covered. Our diverse fleet of vehicles, competitive pricing, and straightforward
                        booking process make it easy to secure the perfect car for a day, ensuring that you have the freedom to
                        go where you need to, when you need to. Your short-term journey, no matter how busy or relaxed, begins
                        with us.</p>

                    <h3 id="whoisitfor">Who Is The Service For?</h3>
                    <p>Our One-Day Rental service at Vasilenko Car Rental is tailored to meet the needs of individuals and
                        travelers seeking short-term transportation solutions. It's ideal for local residents looking for a
                        car to run errands, tourists exploring a new city, business professionals attending meetings, or
                        anyone in need of a reliable vehicle for a single day. If you have a busy schedule or simply want
                        the flexibility of a car for a day, our one-day rental programs offer the freedom to plan your day
                        on your terms. Whether it's for business, leisure, or convenience, our one-day rentals are the perfect
                        solution for those looking for a quick, hassle-free, and cost-effective way to get around.</p>

                    <h3 id="howitworks">How Does It Work?</h3>
                    <p>When you search a car rental, under the 'rental type' section choose the amount of hours you wish your rent
                        to be.<br /> 12h, 18h, or 24h. Discount applies automatically!
                    </p>

                    <h3 id="taxesandwriteoff">Taxes & Business Write Off</h3>
                    <p>At Vasilenko Car Rental, we're here to help you navigate the financial aspects of your car rental needs. One of
                        the advantages of partnering with us is the potential for valuable tax deductions and business write-offs.
                        Depending on your business structure and the nature of your rentals, you may be eligible to claim a portion
                        of your car rental expenses as a tax deduction. By doing so, you can reduce your taxable income and ultimately
                        lower your tax liability. It's a smart way to manage your finances and maximize savings while providing
                        essential transportation for your business needs. Always consult with your accountant or tax advisor to
                        understand how our car rental services can work to your advantage in your specific financial situation.</p>

                    <h3 id="contactus">Contact Us!</h3>
                    <p>form</p>

                </div>
            </div>
            <Header />
        </div>
    );
}

export default OneDay;
