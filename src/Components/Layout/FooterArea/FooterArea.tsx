import "./FooterArea.css";
import LegalInformation from "./LegalInformation/LegalInformation";
import Links from "./Links/Links";
import OurPartners from "./OurPartners/OurPartners";


function FooterArea(): JSX.Element {
    return (
        <div className="FooterArea">
            <LegalInformation />
            <OurPartners />
            <Links />
        </div>
    );
}

export default FooterArea;
