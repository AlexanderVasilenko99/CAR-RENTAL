import appConfig from "../../../../Utils/AppConfig";
import HelpItem from "./HelpItem/HelpItem";
import "./HelpPage.css";

function HelpPage(): JSX.Element {
    return (
        <div className="HelpPage">
            <h1>How can we help you?</h1>
            <div className="grig-container">
                <HelpItem redirectPath={appConfig.helpPageTermsConditionsPagePath} header="Terms And Conditions"
                    text="You'll find all the key information you need on bookings, deposits and how we keep your data safe here." />
                <HelpItem redirectPath={appConfig.locationsPagePath} header="All About Locations"
                    text="View all our locations, working hours, and telephone numbers." />
                <HelpItem redirectPath={appConfig.helpPageFAQPagePath} header="FAQ"
                    text="View our 15 most frequently asked questions and their answers!" />
                <HelpItem redirectPath={appConfig.helpPageInfoPagePath} header="Useful information"
                    text="Find useful information and get familiar with key rental points prior to your rental here!" />
                <HelpItem redirectPath={appConfig.helpPageDisabilityPagePath} header="Disability Services & Discounts"
                    text="At Vasilenko Car Rental We provide a full range of products and services for our client drivers and
                    passengers with no extra cost, and offer special discounts at times!" />
                <HelpItem redirectPath={appConfig.helpPageClaimsAndFormsPagePath} header="Claims & Accident Forms"
                    text="All the paperwork you might need at unfortunate events." />
                <HelpItem redirectPath={appConfig.helpPagePastRentalsPagePath} header="Past Rentals Receipts & Information"
                    text="Request any details/T.O.A/receipts about your previous rentals here." />
                <HelpItem redirectPath={appConfig.helpPageLostFoundPagePath} header="Lost & Found"
                    text="Think you've lost or forgot possessions in your car rental? Let our lost and found department
                    will help you!" />
                <HelpItem redirectPath={appConfig.LoyaltyProgramPagePath} header="Loyalty Program"
                    text="Discover our loyalty program and it's benefits for you here here!" />
                <HelpItem redirectPath={appConfig.helpPageCustomerServicePagePath} header="Customer Service"
                    text="Did not found your answer? Get in touch with our customer service here!" />
            </div>
            <h1>Still Missing Something? Let Us Know! (contact form)</h1>
            {/* <img src={require("../../../../Assets/Images/car2.jpg")} alt="" className="banner"/> */}
        </div>
    );
}

export default HelpPage;
