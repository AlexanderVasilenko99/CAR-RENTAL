import { CareerBenefitModel } from "../../../../Models/CareerBenefitModel";
import CareerBenefit from "./CareerBenefit/CareerBenefit";
import "./CareersPage.css";

function CareersPage(): JSX.Element {
    const benefits: CareerBenefitModel[] = [
        new CareerBenefitModel("Full Dental Care", "toothicon.png", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vitae enim odio, reiciendis quaerat impedit cum culpa assumenda vero voluptatibus laudantium consequuntur? In earum nostrum expedita, aperiam beatae et nemo? Labore doloribus nemo velit aut alias optio vero animi minus, eius asperiores atque itaque ab nam impedit soluta cum necessitatibus!"),
        new CareerBenefitModel("Flexible Hours", "clockicon.png", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vitae enim odio, reiciendis quaerat impedit cum culpa assumenda vero voluptatibus laudantium consequuntur? In earum nostrum expedita, aperiam beatae et nemo? Labore doloribus nemo velit aut alias optio vero animi minus, eius asperiores atque itaque ab nam impedit soluta cum necessitatibus!"),
        new CareerBenefitModel("Freindly Youthful Environment", "friendlyicon.png", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vitae enim odio, reiciendis quaerat impedit cum culpa assumenda vero voluptatibus laudantium consequuntur? In earum nostrum expedita, aperiam beatae et nemo? Labore doloribus nemo velit aut alias optio vero animi minus, eius asperiores atque itaque ab nam impedit soluta cum necessitatibus!"),
        new CareerBenefitModel("Promotion & Growth Opportunities", "growthicon.png", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vitae enim odio, reiciendis quaerat impedit cum culpa assumenda vero voluptatibus laudantium consequuntur? In earum nostrum expedita, aperiam beatae et nemo? Labore doloribus nemo velit aut alias optio vero animi minus, eius asperiores atque itaque ab nam impedit soluta cum necessitatibus!"),
        new CareerBenefitModel("20 Payed Off Days a Year!", "calendaricon.png", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vitae enim odio, reiciendis quaerat impedit cum culpa assumenda vero voluptatibus laudantium consequuntur? In earum nostrum expedita, aperiam beatae et nemo? Labore doloribus nemo velit aut alias optio vero animi minus, eius asperiores atque itaque ab nam impedit soluta cum necessitatibus!"),

    ];
    return (
        <div className="CareersPage">
            <h1>Work with us!</h1>
            <div className="CareersPage-info-container">
                {benefits.map(b => <CareerBenefit benefitHeader={b.benefitHeader}
                    benefitImgName={b.benefitImgName} benefitText={b.benefitText} />)}
            </div>
            <h1>Our hiring process:</h1>
            <h1>Open Positions:</h1>
            <h1>Get in touch!</h1>
        </div>
    );
}

export default CareersPage;
