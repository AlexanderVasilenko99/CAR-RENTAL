import { InfoItemModel } from "../../../../../../Models/InfoItemModel";
import InfoItem from "../InfoItem/InfoItem";
import "./RoadTripInspiration.css";

function RoadTripInspiration(): JSX.Element {
    const articles: InfoItemModel[] = [
        new InfoItemModel("The Best Road Trips to Take in Israel", "5.png",
            "Israel is an ideal place for roadtrips; small in size yet abundant with natural beauty and diverse, majestic landscapes...",
            "https://theculturetrip.com/middle-east/israel/articles/the-best-roadtrips-to-take-in-israel"),
        new InfoItemModel("HOW TO ROAD TRIP ISRAEL LIKE A PRO", "6.png",
            "With its rich tapestry of landscapes, cultures, and historical sites, Israel beckons travelers to embark on exhilarating road...",
            "https://www.nomadicmatt.com/travel-blogs/budget-israel-road-trip/"),
        new InfoItemModel("Best Road Trips to Conquer The Holyland", "7.png",
            "Having visited Israel regularly and completed three road trips across the country, we can confidently say...",
            "https://private-tours-in-israel.com/best-road-trips-in-israel/"),
        new InfoItemModel("Beyond Tel Aviv: road-tripping Israel's north", "8.png",
            "The joy of driving Israel’s north coast is all about the detours. It takes just a couple of hours to zoom directly between...",
            "https://www.lonelyplanet.com/articles/beyond-tel-aviv-road-tripping-israels-north-coast")
    ]
    return (
        <div className="EntireRoadTripInspiration">
            <h2>Road Trip Inspiration</h2>
            <div className="RoadTripInspiration">
                <div className="row-content">
                    {articles.map(a => <InfoItem header={a.header} content={a.content}
                        imageName={a.imageName} redirectPath={a.redirectPath} />)}
                </div>
            </div>
        </div>
    );
}

export default RoadTripInspiration;
