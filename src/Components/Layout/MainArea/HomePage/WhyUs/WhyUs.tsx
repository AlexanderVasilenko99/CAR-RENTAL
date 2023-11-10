import Perk from "./Perk/Perk";
import "./WhyUs.css";

function WhyUs(): JSX.Element {
    return (
        <div className="WhyUs">
            <div className="WhyUsContent">
                <Perk/>
                <Perk/>
                <Perk/>
                <Perk/>
            </div>
        </div>
    );
}

export default WhyUs;
