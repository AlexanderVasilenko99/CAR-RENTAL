import { InfoItemModel } from "../../../../../../Models/InfoItemModel";
import InfoItem from "../InfoItem/InfoItem";
import "./RentalTips.css";

function RentalTips(): JSX.Element {
    const articles: InfoItemModel[] = [
        new InfoItemModel("Essential Guide to Renting a Car for the First Time", "4.png",
            "Renting a car for the first time can be an exciting and challenging experience. It can be fun to drive a newer...",
            "https://www.moneygeek.com/insurance/auto/guide-to-rental-cars/"),
        new InfoItemModel("10 Things You Should Do Every Time You Rent a Car", "2.png",
            "Tips and tricks to earn bonus rewards, save money, and insure your rental car on your next road trip...",
            "https://www.afar.com/magazine/essential-car-rental-tips"),
        new InfoItemModel("The Cheapest Way to Rent a Car: 10 Tips To Save", "1.png",
            "Changing travel habits due to the pandemic have sent rental car prices to record highs. You can still find a deal...",
            "https://www.nerdwallet.com/article/finance/find-cheap-car-rental"),
        new InfoItemModel("22 Best Tips For Renting Cars in 2023", "3.png",
            "Renting a vehicle for vacation is expensive! Typical rental car rates can easily cost as much as your accommodations – which...",
            "https://jetsettingfools.com/best-tips-for-renting-cars/")
    ]
    return (
        <div>
            <h2>Rental Tips</h2>
            <div className="RentalTips">
                <div className="row-content">
                    {articles.map(a => <InfoItem header={a.header} content={a.content}
                        imageName={a.imageName} redirectPath={a.redirectPath} />)}
                </div>
            </div>
        </div>
    );
}

export default RentalTips;
