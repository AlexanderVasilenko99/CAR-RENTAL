import "./ServicesPage.css";
import SingleService from "./SingleService/SingleService";

function ServicesPage(): JSX.Element {
    return (
        <div className="ServicesPage">
            <div className="image-container">
                {/* <img src={require("../../../../Assets/Images/road2.png")} /> */}
                <div>
                    <SingleService />
                </div>
                <div>
                    <SingleService />
                </div>
                <div>
                    <SingleService />
                </div>
                <div>
                    <SingleService />
                </div>
                <div>
                    <SingleService />
                </div>
                <div>
                    <SingleService />
                </div>

            </div>

        </div>
    );
}

export default ServicesPage;
