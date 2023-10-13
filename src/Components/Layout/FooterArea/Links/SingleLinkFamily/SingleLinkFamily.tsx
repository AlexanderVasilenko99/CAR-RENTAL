import { NavLink } from "react-router-dom";
import SingleLinkFamilyModel from "../../../../../Models/SingleLinkFamilyModel";
import "./SingleLinkFamily.css";

function SingleLinkFamily(params: SingleLinkFamilyModel): JSX.Element {
    return (
        <div className="SingleLinkFamily">
            <h3>
                {params.header}
            </h3>
            <div>


                {params.firstLinkHeader &&
                    <NavLink to={params.firstLinkPath}>{params.firstLinkHeader}</NavLink>
                }
                {params.secondLinkHeader &&
                    <NavLink to={params.secondLinkPath}>{params.secondLinkHeader}</NavLink>
                }
                {params.thirdLinkHeader &&
                    <NavLink to={params.thirdLinkPath}>{params.thirdLinkHeader}</NavLink>
                }
                {params.fourthLinkHeader &&
                    <NavLink to={params.fourthLinkPath}>{params.fourthLinkHeader}</NavLink>
                }
                {params.fifthLinkHeader &&
                    <NavLink to={params.fifthLinkPath}>{params.fifthLinkHeader}</NavLink>
                }
                {params.sixthLinkHeader &&
                    <NavLink to={params.sixthLinkPath}>{params.sixthLinkHeader}</NavLink>
                }
                {params.seventhLinkHeader &&
                    <NavLink to={params.seventhLinkPath}>{params.seventhLinkHeader}</NavLink>
                }
                {params.eighthLinkHeader &&
                    <NavLink to={params.eighthLinkPath}>{params.eighthLinkHeader}</NavLink>
                }
                {params.ninthLinkHeader &&
                    <NavLink to={params.ninthLinkPath}>{params.ninthLinkHeader}</NavLink>
                }
                {params.tenthLinkHeader &&
                    <NavLink to={params.tenthLinkPath}>{params.tenthLinkHeader}</NavLink>
                }

            </div>
        </div>
    );
}

export default SingleLinkFamily;
