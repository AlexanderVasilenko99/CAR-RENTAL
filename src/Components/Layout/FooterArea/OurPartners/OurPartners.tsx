import { PartnerModel } from "../../../../Models/PartnerModel";
import "./OurPartners.css";
import Partner from "./Partner/Partner";

function OurPartners(): JSX.Element {
    const partners: PartnerModel[] = [
        new PartnerModel("tevalogo2.png", "https://www.tevapharm.com/"),
        new PartnerModel("elbitlogo.png", "https://elbitsystems.com/"),
        new PartnerModel("mobileyelogo.png", "https://www.mobileye.com/"),
        new PartnerModel("cyberarklogo.png", "https://www.cyberark.com/"),
        new PartnerModel("carrefourlogo.png", "https://www.carrefour.co.il/"),
        new PartnerModel("keshetlogo2.png", "https://www.keshet-teamim.co.il/"),
    ]
    return (
        <div className="OurPartners">
            <p>
                Annually trusted worldwide by thousands of individual clients and hundreds of leading corporations including:
            </p>
            <div className="partners-grid-container">
                {partners.map(p => <Partner imgName={p.imgName} link={p.link} />)}
            </div>
        </div >
    );
}

export default OurPartners;
