import "./Perk.css";
export class PerkModel {
    public header: string;
    public imageName: string;
    constructor(header: string, imageName: string) {
        this.header = header;
        this.imageName = imageName;
    }
}
function Perk(props:PerkModel): JSX.Element {
    return (
        <div className="Perk">
            <h2>{props.header}</h2>
            {/* <img src={require(`../../../../../../Assets/Images/HomePage/{props.imageName}`)} alt="" /> */}

        </div>
    );
}

export default Perk;
