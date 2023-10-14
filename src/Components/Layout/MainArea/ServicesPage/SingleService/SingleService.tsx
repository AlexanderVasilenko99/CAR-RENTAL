import { NavLink } from "react-router-dom";
import "./SingleService.css";

function SingleService(): JSX.Element {
    return (
        <div className="SingleService">
            <div className="background"></div>
            <div className="content">
                <div>

                    <img src={require("../../../../../Assets/Images/raanana.jpg")} alt="" />
                    <h3>Fuck bitches</h3>
                    <p>Lorem ipsum dolor sitg elit. Aliquidm quam, architecto, molestias quas omnis magnam tempore perspiciatis corporis aspernatur.</p>
                </div>

                <div>
                    <NavLink to={'#'}>Learn More</NavLink>
                </div>

            </div>
        </div>
    );
}

export default SingleService;
