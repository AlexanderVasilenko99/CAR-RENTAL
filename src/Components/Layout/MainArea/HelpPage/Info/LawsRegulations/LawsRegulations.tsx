import InfoItem from "../InfoItem/InfoItem";
import "./LawsRegulations.css";

function LawsRegulations(): JSX.Element {
    return (
        <div>
            <h2>Driving Laws and Regulations</h2>
            <div className="LawsRegulations">
                <div className="row-content">
                    <InfoItem header="Driving in Israel - For Foreigners" content="Israel is a small country, making it easily navigable by car.
                    The last decade has seen great infrastructure improvements..." imageName="9.png"
                        redirectPath="https://www.tripsavvy.com/driving-in-israel-5090148" />

                    <InfoItem header="FAQ – Israeli Traffic Law & Regulation" content="o you plan on renting a car in Israel to explore this
                    wonderful country? We have done the same and cannot wait..." imageName="10.png"
                        redirectPath="https://lawoffice.org.il/en/faq-israeli-traffic-law/" />

                    <InfoItem header="Driving in Israel: Everything To Know" content="This article, FAQ – Israeli Traffic Law, addresses many
                    issues relevant to anyone that has been involved in a traffic..." imageName="11.png"
                        redirectPath="https://www.laidbacktrip.com/posts/driving-in-israel" />

                    <InfoItem header="Traffic Laws in Israel - For Travelers" content="Statistics say that it is safer to be in a vehicle in Israel than
                    anywhere in North America. There are fewer fatalities in..." imageName="12.png"
                        redirectPath="https://commonlegalquestions.com/traffic-laws-in-israel/" />
                </div>
            </div>
        </div>
    );
}

export default LawsRegulations;
