import InfoItem from "../InfoItem/InfoItem";
import "./RoadTripInspiration.css";

function RoadTripInspiration(): JSX.Element {
    return (
        <div>
            <h2>Road Trip Inspiration</h2>
            <div className="RoadTripInspiration">
                <div className="row-content">
                    <InfoItem header="The Best Road Trips to Take in Israel" content="Israel is an ideal place for roadtrips;
                    small in size yet abundant with natural beauty and diverse, majestic landscapes..." imageName="5.png"
                        redirectPath="https://theculturetrip.com/middle-east/israel/articles/the-best-roadtrips-to-take-in-israel" />

                    <InfoItem header="HOW TO ROAD TRIP ISRAEL LIKE A PRO" content="With its rich tapestry of landscapes, cultures,
                    and historical sites, Israel beckons travelers to embark on exhilarating road..." imageName="6.png"
                        redirectPath="https://www.nomadicmatt.com/travel-blogs/budget-israel-road-trip/" />

                    <InfoItem header="Best Road Trips to Conquer The Holyland" content="Having visited Israel regularly and completed three
                    road trips across the country, we can confidently say..." imageName="7.png"
                        redirectPath="https://private-tours-in-israel.com/best-road-trips-in-israel/" />

                    <InfoItem header="Beyond Tel Aviv: road-tripping Israel's north" content="The joy of driving Israel’s north
                    coast is all about the detours. It takes just a couple of hours to zoom directly between..." imageName="8.png"
                        redirectPath="https://www.lonelyplanet.com/articles/beyond-tel-aviv-road-tripping-israels-north-coast" />
                </div>
            </div>
        </div>
    );
}

export default RoadTripInspiration;
