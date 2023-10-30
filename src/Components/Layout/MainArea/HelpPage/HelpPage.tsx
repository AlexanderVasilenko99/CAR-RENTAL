import { HelpItemModel } from "../../../../Models/HelpItemModel";
import appConfig from "../../../../Utils/AppConfig";
import HelpItem from "./HelpItem/HelpItem";
import "./HelpPage.css";

function HelpPage(): JSX.Element {
    const items: HelpItemModel[] = [
        new HelpItemModel("Terms And Conditions", appConfig.helpPageTermsConditionsPagePath,
            "You'll find all the key information you need on bookings, deposits and how we keep your data safe here."),
        new HelpItemModel("All About Locations", appConfig.locationsPagePath,
            "View all our locations, working hours, and telephone numbers."),
        new HelpItemModel("FAQ", appConfig.helpPageFAQPagePath,
            "View our 15 most frequently asked questions and their answers!"),
        new HelpItemModel("Useful information", appConfig.helpPageInfoPagePath,
            "Find useful information and get familiar with key rental points prior to your rental here!"),
        new HelpItemModel("Disability Services & Discounts", appConfig.helpPageDisabilityPagePath,
            "At Vasilenko Car Rental We provide a full range of products and services for our client drivers and passengers with no extra cost, and offer special discounts at times!"),
        new HelpItemModel("Claims & Accident Forms", appConfig.helpPageClaimsAndFormsPagePath,
            "All the paperwork you might need at unfortunate events."),
        new HelpItemModel("Past Rentals Receipts & Information", appConfig.helpPagePastRentalsPagePath,
            "Request any details/T.O.A/receipts about your previous rentals here."),
        new HelpItemModel("Lost & Found", appConfig.helpPageLostFoundPagePath,
            "Think you've lost or forgot possessions in your car rental? Let our lost and found departmentwill help you!"),
        new HelpItemModel("Loyalty Program", appConfig.LoyaltyProgramPagePath,
            "Discover our loyalty program and it's benefits for you here here!"),
        new HelpItemModel("Customer Service", appConfig.helpPageCustomerServicePagePath,
            "Did not found your answer? Get in touch with our customer service here!"),
    ]
    return (
        <div className="HelpPage">
            <h1>How can we help you?</h1>
            <div className="grig-container">
                {items.map(i => <HelpItem header={i.header} redirectPath={i.redirectPath} text={i.text} />)}
            </div>
            <h1>Still Missing Something? Let Us Know! (contact form)</h1>
            {/* <img src={require("../../../../Assets/Images/car2.jpg")} alt="" className="banner"/> */}
        </div>
    );
}

export default HelpPage;
