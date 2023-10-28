import InfoItem from "../InfoItem/InfoItem";
import "./PackingEssentials.css";

function PackingEssentials(): JSX.Element {
    return (
        <div>
            <h2>Packing and Travel Essentials</h2>
            <div className="PackingEssentials">
                <div className="row-content">
                    <InfoItem header="PACKING FOR VACATION & VACATION TIPS" content="Whether this is your first trip
                    or you're a seasoned globetrotter, Its' always helpful to have a rundown of the..." imageName="17.png"
                        redirectPath={"https://www.eaglecreek.com/blogs/articles/what-pack-ultimate-travel-packing-checklist"} />

                    <InfoItem header="50 THINGS TO PACK IN YOUR TRAVEL BACKPACK" content="Packing can be the bane of your life
                    before a big trip, so we’ve made the chore a little less tiresome for you and devised a..." imageName="18.png"
                        redirectPath="https://www.st-christophers.co.uk/travel-blog/what-to-pack-in-your-travel-backpack/#article-top" />

                    <InfoItem header="Travelers Checklist For Holiday Or Business" content="This
                    checklist helps you decide what to pack for your travels. Select the items you still need to pack (or already
                        packed)..." imageName="19.png"
                        redirectPath="https://www.travelers-checklist.com/" />

                    <InfoItem header="What to Pack for Every Type of Vacation" content="The perfect vacation starts with the right
                    packing list. Don’t even think of leaving home without downloading one of these..." imageName="20.png"
                        redirectPath="https://www.rd.com/article/packing-list/" />
                </div>
            </div>
        </div>
    );
}

export default PackingEssentials;
