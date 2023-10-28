import InfoItem from "../InfoItem/InfoItem";
import "./FamilyTravelAdvice.css";

function FamilyTravelAdvice(): JSX.Element {
    return (
        <div>
            <h2>Family Travel Advice</h2>
            <div className="FamilyTravelAdvice">
                <div className="row-content">
                    <InfoItem header="33 Best Tips for Family Travel" content="Traveling with your whole family can be overwhelming.
                    Even though it gets easier the more you do it, you’ll run into..." imageName="13.png"
                        redirectPath="https://upgradedpoints.com/travel/best-tips-family-travel-with-kids/" />

                    <InfoItem header="50 Family Travel Tips for 2023" content="From airplane rides to multi-day road trips, I’ve
                    been traveling with kids for more than a decade now. In this guide, I share my..." imageName="14.png"
                        redirectPath="https://travellemming.com/family-travel-tips/" />

                    <InfoItem header="How to Travel With Kids - Save Your Family Vacation" content="Getting away as a family is never
                    an easy feat — in fact, few things cause parents more anxiety than the idea of traveling..." imageName="16.png"
                        redirectPath="https://www.goodhousekeeping.com/life/travel/a30317914/how-to-travel-with-kids/" />

                    <InfoItem header="29+ BEST FAMILY TRAVEL TIPS FROM THE EXPERTS" content="The time has come. You’ve seen so any
                    videos and photos online of families traveling and heard all the stories of how..." imageName="15.png"
                        redirectPath="https://www.ytravelblog.com/best-family-travel-tips/" />
                </div>
            </div>
        </div>
    );
}

export default FamilyTravelAdvice;
