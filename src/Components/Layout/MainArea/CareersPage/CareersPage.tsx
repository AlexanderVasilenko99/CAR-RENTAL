import CareerBenefit from "./CareerBenefit/CareerBenefit";
import "./CareersPage.css";

function CareersPage(): JSX.Element {
    return (
        <div className="CareersPage">
            <h1>Work with us!</h1>
            <div className="CareersPage-info-container">
                <CareerBenefit benefitHeader="Full Dental Care" benefitImgSrc="toothicon.png"
                    benefitText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vitae enim odio, reiciendis
                    quaerat impedit cum culpa assumenda vero voluptatibus laudantium consequuntur? In earum nostrum expedita,
                    aperiam beatae et nemo? Labore doloribus nemo velit aut alias optio vero animi minus, eius asperiores
                    atque itaque ab nam impedit soluta cum necessitatibus!" />
                <CareerBenefit benefitHeader="Flexible Hours" benefitImgSrc="clockicon.png"
                    benefitText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vitae enim odio, reiciendis
                    quaerat impedit cum culpa assumenda vero voluptatibus laudantium consequuntur? In earum nostrum expedita,
                    aperiam beatae et nemo? Labore doloribus nemo velit aut alias optio vero animi minus, eius asperiores
                    atque itaque ab nam impedit soluta cum necessitatibus!" />
                <CareerBenefit benefitHeader="Freindly Youthful Environment" benefitImgSrc="friendlyicon.png"
                    benefitText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vitae enim odio, reiciendis
                    quaerat impedit cum culpa assumenda vero voluptatibus laudantium consequuntur? In earum nostrum expedita,
                    aperiam beatae et nemo? Labore doloribus nemo velit aut alias optio vero animi minus, eius asperiores
                    atque itaque ab nam impedit soluta cum necessitatibus!" />
                <CareerBenefit benefitHeader="Promotion & Growth Opportunities" benefitImgSrc="growthicon.png"
                    benefitText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vitae enim odio, reiciendis
                    quaerat impedit cum culpa assumenda vero voluptatibus laudantium consequuntur? In earum nostrum expedita,
                    aperiam beatae et nemo? Labore doloribus nemo velit aut alias optio vero animi minus, eius asperiores
                    atque itaque ab nam impedit soluta cum necessitatibus!" />
                <CareerBenefit benefitHeader="20 Payed Off Days a Year!" benefitImgSrc="calendaricon.png"
                    benefitText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, vitae enim odio, reiciendis
                    quaerat impedit cum culpa assumenda vero voluptatibus laudantium consequuntur? In earum nostrum expedita,
                    aperiam beatae et nemo? Labore doloribus nemo velit aut alias optio vero animi minus, eius asperiores
                    atque itaque ab nam impedit soluta cum necessitatibus!" />
            </div>
            <h1>Our hiring process:</h1>
            <h1>Open Positions:</h1>
            <h1>Get in touch!</h1>
        </div>
    );
}

export default CareersPage;
