import { InfoItemModel } from "../../../../../../Models/InfoItemModel";
import InfoItem from "../InfoItem/InfoItem";
import "./LawsRegulations.css";

function LawsRegulations(): JSX.Element {
    const articles: InfoItemModel[] = [
        new InfoItemModel("Driving in Israel - For Foreigners", "9.png",
            "Israel is a small country, making it easily navigable by car. The last decade has seen great infrastructure improvements...",
            "https://www.tripsavvy.com/driving-in-israel-5090148"),
        new InfoItemModel("FAQ – Israeli Traffic Law & Regulation", "10.png",
            "So you plan on renting a car in Israel to explore this wonderful country? We have done the same and cannot wait...",
            "https://lawoffice.org.il/en/faq-israeli-traffic-law/"),
        new InfoItemModel("Driving in Israel: Everything To Know", "11.png",
            "This article, FAQ – Israeli Traffic Law, addresses many issues relevant to anyone that has been involved in a traffic...",
            "https://www.laidbacktrip.com/posts/driving-in-israel"),
        new InfoItemModel("Traffic Laws in Israel - For Travelers", "12.png",
            "Statistics say that it is safer to be in a vehicle in Israel than anywhere in North America. There are fewer fatalities in...",
            "https://commonlegalquestions.com/traffic-laws-in-israel/")
    ]
    return (
        <div>
            <h2>Driving Laws and Regulations</h2>
            <div className="LawsRegulations">
                <div className="row-content">
                    {articles.map(a => <InfoItem header={a.header} content={a.content}
                        imageName={a.imageName} redirectPath={a.redirectPath} />)}
                </div>
            </div>
        </div>
    );
}

export default LawsRegulations;
