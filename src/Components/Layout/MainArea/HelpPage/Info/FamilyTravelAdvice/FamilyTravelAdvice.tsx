import { InfoItemModel } from "../../../../../../Models/InfoItemModel";
import InfoItem from "../InfoItem/InfoItem";
import "./FamilyTravelAdvice.css";

function FamilyTravelAdvice(): JSX.Element {
    const articles: InfoItemModel[] = [
        new InfoItemModel("33 Best Tips for Family Travel", "13.png",
            "Traveling with your whole family can be overwhelming. Even though it gets easier the more you do it, you’ll run into...",
            "https://upgradedpoints.com/travel/best-tips-family-travel-with-kids/"),
        new InfoItemModel("50 Family Travel Tips for 2023", "14.png",
            "From airplane rides to multi-day road trips, I’ve been traveling with kids for more than a decade now. In this guide, I share my...",
            "https://travellemming.com/family-travel-tips/"),
        new InfoItemModel("How to Travel With Kids - Save Your Family Vacation", "16.png",
            "Getting away as a family is never an easy feat — in fact, few things cause parents more anxiety than the idea of traveling...",
            "https://www.goodhousekeeping.com/life/travel/a30317914/how-to-travel-with-kids/"),
        new InfoItemModel("29+ BEST FAMILY TRAVEL TIPS FROM THE EXPERTS", "15.png",
            "The time has come. You’ve seen so any videos and photos online of families traveling and heard all the stories of how...",
            "https://www.ytravelblog.com/best-family-travel-tips/")
    ]
    return (
        <div>
            <h2>Family Travel Advice</h2>
            <div className="FamilyTravelAdvice">
                <div className="row-content">
                    {articles.map(a => <InfoItem header={a.header} content={a.content}
                        imageName={a.imageName} redirectPath={a.redirectPath} />)}
                </div>
            </div>
        </div>
    );
}

export default FamilyTravelAdvice;
