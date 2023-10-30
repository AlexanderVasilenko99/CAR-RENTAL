import { NavLink } from "react-router-dom";
import { SingleLinkFamilyModel } from "../../../../../Models/SingleLinkFamilyModel";
import "./SingleLinkFamily.css";

function SingleLinkFamily(params: SingleLinkFamilyModel): JSX.Element {
    return (
        <div className="SingleLinkFamily">
            <h3>
                {params.header}
            </h3>
            <div>
                {params.singleLinks?.map(l => <NavLink to={l.linkPath}>{l.linkHeader}</NavLink>)}
            </div>
        </div>
    );
}

export default SingleLinkFamily;
