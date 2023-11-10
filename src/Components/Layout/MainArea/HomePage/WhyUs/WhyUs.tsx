import Perk, { PerkModel } from "./Perk/Perk";
import "./WhyUs.css";

function WhyUs(): JSX.Element {
    const perks: PerkModel[] = [
        new PerkModel("IT'S EASY!", "easy.png"),
        new PerkModel("IT'S AFFORDABLE!", "easy.png")
    ]
    return (
        <div className="WhyUs">
            <div className="WhyUsContent">
                {perks.map(p =>
                    <Perk header={p.header} imageName={p.imageName} />
                )}
            </div>
        </div>
    );
}

export default WhyUs;
