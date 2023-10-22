import { HashLink } from "react-router-hash-link";
import appConfig from "../../../../../Utils/AppConfig";
import Header from "../Header/Header";
import "./MonthlyRental.css";


function MonthlyRental(): JSX.Element {
    return (
        <div className="MonthlyRental">
            <div id="header">
                <div className="img-container">
                    <img src={require("../../../../../Assets/Images/monthly2.png")} />
                    <div className="img-container-content">
                        <div>
                            <h1>Monthly Rental</h1>
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
                            <HashLink smooth to={appConfig.samePagePath + "contactus"}><li>Contact Us</li></HashLink>
                        </ul>
                    </div>
                </div>
                <div className="content">

                    <h3 id="aboutservice">About The  Service</h3>
                    <p>At Vasilenko Car Rental, we understand that sometimes you need more than just a quick ride. That's why
                        we offer a convenient and cost-effective Monthly Car Rental Program designed to cater to your long-term
                        transportation needs. Whether you're a business professional in town for an extended project, a traveler
                        looking for an extended stay, or a local resident in need of a flexible long-term vehicle solution, our
                        monthly rental program has you covered.</p>

                    <h3 id="whychoose">Why Choose?</h3>
                    <p>Affordability: Our monthly rates are designed to offer significant cost savings compared to traditional
                        daily rentals. Enjoy quality vehicles at a fraction of the price.

                        Flexibility: With our monthly rental program, you have the freedom to keep your rental for as long as
                        you need, without being tied down to a fixed contract. Rent for one month or several months—it's up to you!

                        Wide Vehicle Selection: Choose from our diverse fleet of well-maintained and up-to-date vehicles, including
                        economy cars, SUVs, sedans, and more. We have the perfect vehicle for your specific needs.

                        Maintenance and Roadside Assistance: Your safety and satisfaction are our top priorities. All our monthly
                        rentals include routine maintenance, and we provide 24/7 roadside assistance for your peace of mind.

                        Simple Booking Process: Booking a monthly rental with Vasilenko Car Rental is a breeze. Our user-friendly
                        website allows you to reserve your vehicle in just a few clicks, and our customer support team is always
                        here to assist you.

                        No Hidden Fees: Transparency is key to our service. We offer clear and straightforward pricing with no
                        hidden fees or surprises.</p>

                    <h3 id="whoisitfor">Who Is The Service For?</h3>
                    <p>Business Travelers: Stay productive during extended business trips with a reliable vehicle at your disposal.

                        Extended Vacationers: Make the most of your vacation with the convenience of a monthly rental, allowing you
                        to explore at your own pace.

                        Local Residents: Whether your car is in the shop or you need a vehicle for a few months, our monthly program
                        is a cost-effective solution.

                        Temporary Residents: New to the area or in town for a temporary job assignment? Our monthly rental program
                        offers the flexibility you need.</p>

                    <h3 id="howitworks">How Does It Work?</h3>
                    <p>משהו בסגנון של מה שעשיתי לגני</p>

                    <h3 id="taxesandwriteoff">Taxes & Business Write Off</h3>
                    <p>Vasilenko Car Rental, we're here to help you navigate the financial aspects of your car rental needs. One of
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

export default MonthlyRental;
