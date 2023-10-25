import "./Info.css";
import InfoItem from "./InfoItem/InfoItem";

function Info(): JSX.Element {
    return (
        <div className="Info">
            <h1>Exploring More with Vasilenko Car Rental</h1>
            <p>Welcome to our "Useful Information" section, where we aim to provide you with valuable insights and tips to
                enhance your car rental experience. We understand that every journey is a unique adventure, and we're here
                to ensure that your time on the road is as seamless and enjoyable as possible. Whether you're a frequent
                traveler, a family looking for travel advice, or a business professional seeking transportation insights,
                you'll find a wealth of knowledge here. We're passionate about more than just cars; we're passionate about
                enabling your travel dreams. Discover helpful guides, travel inspiration, and expert advice that will make
                your road trips, vacations, and business travels even more remarkable. At Vasilenko Ca Rental, we're not
                just here to rent you a car; we're here to be your trusted travel companion, providing the keys to unlock
                incredible journeys and unforgettable experiences. Start your exploration here, and let the road ahead lead
                to exciting new horizons!</p>
            <div className="row-container">
                <h2>Rental Tips</h2>
                <div className="row-content">
                    <InfoItem header="Essential Guide to Renting a Car for the First Time" content="Renting a car for the first
                    time can be an exciting and challenging experience. It can be fun to drive a newer..." imageName="4.png"
                        redirectPath={"https://www.moneygeek.com/insurance/auto/guide-to-rental-cars/"} />

                    <InfoItem header="10 Things You Should Do Every Time You Rent a Car" content="Tips and tricks to earn bonus
                    rewards, save money, and insure your rental car on your next road trip..." imageName="2.png"
                        redirectPath="https://www.afar.com/magazine/essential-car-rental-tips" />

                    <InfoItem header="The Cheapest Way to Rent a Car: 10 Tips To Save" content="Changing travel habits due to the
                    pandemic have sent rental car prices to record highs. You can still find a deal..." imageName="1.png"
                        redirectPath="https://www.nerdwallet.com/article/finance/find-cheap-car-rental" />

                    <InfoItem header="22 Best Tips For Renting Cars in 2023" content="Renting a vehicle for vacation is expensive!
                    Typical rental car rates can easily cost as much as your accommodations – which..." imageName="3.png"
                        redirectPath="https://jetsettingfools.com/best-tips-for-renting-cars/" />
                </div>

            </div>
            <div className="row-container">
                <h2>Road Trip Inspiration</h2>
                <div className="row-content">
                    <InfoItem header="The Best Road Trips to Take in Israel" content="Israel is an ideal place for roadtrips;
                    small in size yet abundant with natural beauty and diverse, majestic landscapes..." imageName="5.png"
                        redirectPath="https://theculturetrip.com/middle-east/israel/articles/the-best-roadtrips-to-take-in-israel" />

                    <InfoItem header="HOW TO ROAD TRIP ISRAEL LIKE A PRO" content="With its rich tapestry of landscapes, cultures,
                    and historical sites, Israel beckons travelers to embark on exhilarating road..." imageName="6.png"
                        redirectPath="https://www.nomadicmatt.com/travel-blogs/budget-israel-road-trip/" />

                    <InfoItem header="HOW TO ROAD TRIP ISRAEL LIKE A PRO" content="Having visited Israel regularly and completed three
                    road trips across the country, we can confidently say..." imageName="7.png"
                        redirectPath="https://private-tours-in-israel.com/best-road-trips-in-israel/" />

                    <InfoItem header="Beyond Tel Aviv: road-tripping Israel's north" content="he joy of driving Israel’s north
                    coast is all about the detours. It takes just a couple of hours to zoom directly between..." imageName="8.png"
                        redirectPath="https://www.lonelyplanet.com/articles/beyond-tel-aviv-road-tripping-israels-north-coast" />

                </div>
            </div>
            <div className="row-container">
                <h2>Driving Laws and Regulations</h2>
                <div className="row-content">

                </div>
            </div>
            <div className="row-container">
                <h2>Family Travel Advice</h2>
                <div className="row-content">

                </div>
            </div>
            <div className="row-container">
                <h2>Packing and Travel Essentials</h2>
                <div className="row-content">

                </div>
            </div>
            <div className="row-container">
                <h2>Local Culture and Etiquette</h2>
                <div className="row-content">

                </div>
            </div>
        </div>
    );
}

export default Info;
