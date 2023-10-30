import { InfoItemModel } from "../../../../../../Models/InfoItemModel";
import InfoItem from "../InfoItem/InfoItem";
import "./PackingEssentials.css";

function PackingEssentials(): JSX.Element {
    const articles: InfoItemModel[] = [
        new InfoItemModel("PACKING FOR VACATION & VACATION TIPS", "17.png",
            "Whether this is your first trip or you're a seasoned globetrotter, Its' always helpful to have a rundown of the...",
            "https://www.eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist"),
        new InfoItemModel("50 THINGS TO PACK IN YOUR TRAVEL BACKPACK", "18.png",
            "Packing can be the bane of your life before a big trip, so we’ve made the chore a little less tiresome for you and devised a...",
            "https://www.st-christophers.co.uk/travel-blog/what-to-pack-in-your-travel-backpack/#article-top"),
        new InfoItemModel("Travelers Checklist For Holiday Or Business", "19.png",
            "This checklist helps you decide what to pack for your travels. Select the items you still need to pack (or alreadypacked)...",
            "https://www.travelers-checklist.com/"),
        new InfoItemModel("What to Pack for Every Type of Vacation", "20.png",
            "The perfect vacation starts with the rightpacking list. Don’t even think of leaving home without downloading one of these...",
            "https://www.rd.com/article/packing-list/")
    ]
    return (
        <div>
            <h2>Packing and Travel Essentials</h2>
            <div className="PackingEssentials">
                <div className="row-content">
                    {articles.map(a => <InfoItem header={a.header} content={a.content}
                        imageName={a.imageName} redirectPath={a.redirectPath} />)}
                </div>
            </div>
        </div>
    );
}

export default PackingEssentials;
