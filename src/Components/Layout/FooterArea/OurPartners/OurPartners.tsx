import "./OurPartners.css";
import Partner from "./Partner/Partner";

function OurPartners(): JSX.Element {
    return (
        <div className="OurPartners">
            <p>
                Annually trusted worldwide by thousands of individual clients and hundreds of leading corporations including:
            </p>
            <div className="partners-grid-container">
                <Partner imgName="tevalogo2.png" link="https://www.tevapharm.com/" />
                <Partner imgName="elbitlogo.png" link="https://elbitsystems.com/" />
                <Partner imgName="mobileyelogo.png" link="https://www.mobileye.com/" />
                <Partner imgName="cyberarklogo.png" link="https://www.cyberark.com/" />
                <Partner imgName="carrefourlogo.png" link="https://www.carrefour.co.il/" />
                <Partner imgName="keshetlogo2.png" link="https://www.keshet-teamim.co.il/" />
            </div>
        </div >
    );
}

export default OurPartners;
