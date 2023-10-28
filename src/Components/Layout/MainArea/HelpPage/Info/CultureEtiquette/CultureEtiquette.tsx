import InfoItem from "../InfoItem/InfoItem";
import "./CultureEtiquette.css";

function CultureEtiquette(): JSX.Element {
    return (
        <div>
            <h2>Local Culture and Etiquette</h2>
            <div className="CultureEtiquette">
                <div className="row-content">
                    <InfoItem header="The Do’s and Don’ts of Israeli Culture" content="We are always talking about the amazing
                    sights to see in Israel, the food to eat, and the words you must know before you..." imageName="21.png"
                        redirectPath={"https://rosenhebrewschool.com/blog/the-dos-and-donts-of-israeli-culture/#:~:text=Israelis%20are%20not%20afraid%20to,respond%20in%20a%20respectful%20way."} />

                    <InfoItem header="Israeli Culture And Etiquette" content="Orthodox Jewish areas of Israel closely observe Shabbat
                     which begins at sunset Friday and continues until sunset..." imageName="22.png"
                        redirectPath="https://culturalatlas.sbs.com.au/israeli-culture/israeli-culture-etiquette" />

                    <InfoItem header="Israeli Customs, Etiquette and Behavior" content="Israeli and Jewish customs, etiquette and
                    behavior maybe a little different to what you are used to. Don’t take offense if..." imageName="23.png"
                        redirectPath="https://anglo-list.com/israeli-customs-etiquette-and-behavior/" />

                    <InfoItem header="Things to Know About Israel's Local Culture" content="Defining Israeli culture is a difficult
                    task: it is a fascinating and unique blend of cuisines and customs...." imageName="24.png"
                        redirectPath="https://theculturetrip.com/middle-east/israel/articles/things-to-know-about-israels-local-culture" />
                </div>
            </div>
        </div>
    );
}

export default CultureEtiquette;
