import { HashLink } from "react-router-hash-link";
import appConfig from "../../../../../Utils/AppConfig";
import Header from "../Header/Header";
import "./BusinessRental.css";
import { NavLink } from "react-router-dom";


function BusinessRental(): JSX.Element {
    return (
        <div className="BusinessRental">
            <div id="header">
                <div className="img-container">
                    <img src={require("../../../../../Assets/Images/business.png")} />
                    <div className="img-container-content">
                        <div>
                            <h1>Business Rental</h1>
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
                            <HashLink smooth to={appConfig.samePagePath + "whychoose"}><li>Why Choose?</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "whoisitfor"}><li>Who Is The Service For?</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "howitworks"}><li>How Does It Work?</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "taxesandwriteoff"}><li>Taxes & Business Write Off</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "welcomebonus"}><li>Welcome Bonus!</li></HashLink>
                            <HashLink smooth to={appConfig.samePagePath + "contactus"}><li>Contact Us</li></HashLink>
                        </ul>
                    </div>
                </div>
                <div className="content">

                    <h3 id="aboutservice">About The  Service</h3>
                    <p>At Vasilenko Car Rental, we understand that reliable transportation is a vital part of any successful
                        business operation. That's why we offer specialized Business Car Rental Services tailored to meet the
                        unique needs of corporate clients. Whether you're a small startup, a growing enterprise, or a
                        well-established company, our business-focused rental solutions are designed to enhance your mobility,
                        reduce costs, and boost productivity.</p>

                    <h3 id="whychoose">Why Choose?</h3>
                    <p>Fleet Flexibility: We provide access to a diverse fleet of vehicles, from fuel-efficient economy cars to
                        spacious SUVs and executive sedans. Whether you need a single car or a fleet of vehicles, we can
                        accommodate your requirements.

                        Cost-Effective: Our competitive corporate rates and flexible rental options are designed to fit your budget
                        and optimize your transportation expenses. With our business rental services, you can enjoy cost savings
                        compared to maintaining a company-owned fleet.

                        Customized Agreements: We understand that every business is unique. We offer tailored rental agreements,
                        including short-term, long-term, and leasing options to align with your specific operational needs.

                        Effortless Booking: Our user-friendly online booking system streamlines the reservation process, allowing
                        your team to secure vehicles quickly and efficiently.

                        Priority Customer Support: Business clients enjoy dedicated customer support, ensuring quick responses to
                        inquiries and assistance with any special requests or concerns.

                        Maintenance and Reliability: We maintain our fleet to the highest standards, so your team can focus on
                        business matters without worrying about vehicle maintenance.

                        Expense Tracking: Simplify expense reporting with clear and detailed invoices for every rental, making it
                        easy to track and manage your transportation costs.</p>

                    <h3 id="whoisitfor">Who Is The Service For?</h3>
                    <p>From small businesses, to Industry leading giants, businesses of all scales can benefit from it.
                        We offer a wide scale of business programs that are that can satisfy any business manager.
                        Reach out to us <NavLink to={"#"}>HERE</NavLink> to learn more about our business programs and get us to
                        start tailoring the best business rental program for you!</p>

                    <h3 id="howitworks">How Does It Work?</h3>
                    <p>The process is very simple. It contains of four steps and usually takes 1-2 business days.</p>
                    <div className="howitworks-img-container">
                        <img src={require("../../../../../Assets/Images/monthlyrentalsteps2.png")} />
                    </div>

                    <h3 id="taxesandwriteoff">Taxes & Business Write Off</h3>
                    <p>At Vasilenko Car Rental, we're here to help you navigate the financial aspects of your car rental needs. One of
                        the advantages of partnering with us is the potential for valuable tax deductions and business write-offs.
                        Depending on your business structure and the nature of your rentals, you may be eligible to claim a portion
                        of your car rental expenses as a tax deduction. By doing so, you can reduce your taxable income and ultimately
                        lower your tax liability. It's a smart way to manage your finances and maximize savings while providing
                        essential transportation for your business needs. Always consult with your accountant or tax advisor to
                        understand how our car rental services can work to your advantage in your specific financial situation.</p>

                    <h3 id="welcomebonus">Welcome Bonus!</h3>
                    <p>At Vasilenko Car Rental, we value our business clients and want to make your partnership with us even more
                        rewarding. That's why we are pleased to offer a special Welcome Bonus for new corporate customers. When you
                        choose our Business Car Rental Services, you'll not only benefit from our cost-effective and flexible
                        solutions but also receive a generous welcome bonus as a token of our appreciation. This bonus is our way
                        of saying thank you for choosing us as your trusted transportation partner. We believe in building strong,
                        long-lasting relationships with our corporate clients, and the welcome bonus is just the beginning of the
                        exclusive perks and benefits you can expect when working with us. We look forward to welcoming your business
                        to the Vasilenko Car Rental family and providing you with exceptional car rental services that align with
                        your unique needs.</p>

                    <p id="p-m">With Vasilenko Car Rental's Business Car Rental Services, you can optimize your company's
                        mobility while maintaining cost-effectiveness. Focus on your core business activities, and leave your
                        transportation requirements to us. Get in touch with our dedicated corporate services team to discuss your
                        unique needs and explore how our tailored solutions can support your business growth.</p>

                    <h3 id="contactus">Contact Us!</h3>
                    <p>form</p>

                </div>
            </div>
            <Header />
        </div>
    );
}

export default BusinessRental;
