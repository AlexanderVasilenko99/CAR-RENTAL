import { InfoItemModel } from "../../../../../../Models/InfoItemModel";
import InfoItem from "../InfoItem/InfoItem";
import "./CultureEtiquette.css";

function CultureEtiquette(): JSX.Element {
    const articles: InfoItemModel[] = [
        new InfoItemModel("The Do’s and Don’ts of Israeli Culture", "21.png",
            "We are always talking about the amazing sights to see in Israel, the food to eat, and the words you must know before you..."
            , "https://rosenhebrewschool.com/blog/the-dos-and-donts-of-israeli-culture/#:~:text=Israelis%20are%20not%20afraid%20to,respond%20in%20a%20respectful%20way."),
        new InfoItemModel("Israeli Culture And Etiquette", "22.png",
            "Orthodox Jewish areas of Israel closely observe Shabbat which begins at sunset Friday and continues until sunset...",
            "https://culturalatlas.sbs.com.au/israeli-culture/israeli-culture-etiquette"),
        new InfoItemModel("Israeli Customs, Etiquette and Behavior", "23.png",
            "Israeli and Jewish customs, etiquette and behavior maybe a little different to what you are used to. Don’t take offense if...",
            "https://anglo-list.com/israeli-customs-etiquette-and-behavior/"),
        new InfoItemModel("Things to Know About Israel's Local Culture", "24.png",
            "Defining Israeli culture is a difficult task: it is a fascinating and unique blend of cuisines and customs....",
            "https://theculturetrip.com/middle-east/israel/articles/things-to-know-about-israels-local-culture")
    ]
    return (
        <div>
            <h2>Local Culture and Etiquette</h2>
            <div className="CultureEtiquette">
                <div className="row-content">
                    {articles.map(a => <InfoItem header={a.header} content={a.content}
                        imageName={a.imageName} redirectPath={a.redirectPath} />)}
                </div>
            </div>
        </div>
    );
}

export default CultureEtiquette;
