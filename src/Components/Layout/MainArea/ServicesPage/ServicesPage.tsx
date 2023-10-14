import appConfig from "../../../../Utils/AppConfig";
import "./ServicesPage.css";
import SingleService from "./SingleService/SingleService";

function ServicesPage(): JSX.Element {
    return (
        <div className="ServicesPage">
            <div className="image-container">
                {/* <img src={require("../../../../Assets/Images/road2.png")} /> */}
                <div>
                    <SingleService serviceHeader="Car Rental" serviceImageName="raanana.jpg" serviceParagraph="lorem 10" destinationUrl={appConfig.homePagePath} />
                </div>
                <div>
                    <SingleService serviceHeader="Car Rental" serviceImageName="raanana.jpg" serviceParagraph="lorem 10" destinationUrl="#" />
                </div>
                <div>
                    <SingleService serviceHeader="Car Rental" serviceImageName="raanana.jpg" serviceParagraph="lorem 10" destinationUrl="#" />
                </div>
                <div>
                    <SingleService serviceHeader="Car Rental" serviceImageName="raanana.jpg" serviceParagraph="lorem 10" destinationUrl="#" />
                </div>
                <div>
                    <SingleService serviceHeader="Car Rental" serviceImageName="raanana.jpg" serviceParagraph="lorem 10" destinationUrl="#" />
                </div>
                <div>
                    <SingleService serviceHeader="Car Rental" serviceImageName="raanana.jpg" serviceParagraph="lorem 10" destinationUrl="#" />
                </div>

            </div>

        </div>
    );
}

export default ServicesPage;
