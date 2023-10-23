import { HashLink } from "react-router-hash-link";
import appConfig from "../../../../../Utils/AppConfig";
import Header from "../Header/Header";
import "./OneWay.css";
import LinkTree from "../LinkTree/LinkTree";


function OneWay(): JSX.Element {
    return (
        <div className="OneWay">
            <div id="header">
                <div className="img-container">
                    <img src={require("../../../../../Assets/Images/road22.png")} />
                    <div className="img-container-content">
                        <div>
                            <h1>One Way Car Rental</h1>
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
                            <HashLink smooth to={appConfig.samePagePath + "contactus"}><li>Contact Us</li></HashLink>
                        </ul>
                        <h3>See Also</h3>
                        <LinkTree />
                    </div>
                </div>
                <div className="content">

                    <h3 id="aboutservice">About The  Service</h3>
                    <p>Vasilenko Car Rental offers an exceptional One-Way Car Rental service designed for travelers with
                        unidirectional itineraries. Whether you're embarking on a road trip, relocating to a new city, or simply
                        need a hassle-free way to get from point A to point B, our one-way rental service provides the perfect
                        solution. Choose your preferred pickup location, and then drop off the vehicle at a different designated
                        location, saving you the time and effort of returning the car to the original spot. This service is ideal
                        for adventurers exploring new horizons, professionals seeking efficient travel options, and anyone looking for
                        a seamless, one-way transportation experience. At Vasilenko Car Rental, we ensure that your journey, no matter
                        the destination, is marked by convenience and flexibility.</p>

                    <h3 id="whoisitfor">Who Is The Service For?</h3>
                    <p>Our One-Way Car Rental service is perfect for a wide range of travelers and situations. It's ideal for
                        individuals and families embarking on cross-country adventures, those moving to a new city, business
                        professionals attending meetings or conferences, and anyone looking to simplify their travel experience.
                        Whether you're exploring new horizons, relocating, or need a convenient transportation solution for a one-way
                        trip, our service offers the flexibility to match your unique journey. We aim to make unidirectional travel
                        stress-free and straightforward, allowing you to focus on your destination without the concern of returning
                        the vehicle to its original location. With Vasilenko Car Rental, your one-way journey becomes an effortless
                        and enjoyable experience.</p>

                    <h3 id="howitworks">How Does It Work?</h3>
                    <p>When you search a car rental, under the 'rental type' section choose the 'one way' option. You choose pickup
                        and dropdown locations and discount applies automatically!</p>

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

export default OneWay;
