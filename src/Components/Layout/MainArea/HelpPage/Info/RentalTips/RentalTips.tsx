import InfoItem from "../InfoItem/InfoItem";
import "./RentalTips.css";

function RentalTips(): JSX.Element {
    return (
        <div>
            <h2>Rental Tips</h2>
            <div className="RentalTips">
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
        </div>
    );
}

export default RentalTips;
