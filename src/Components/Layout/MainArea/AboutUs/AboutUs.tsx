import "./AboutUs.css";
import cvFile from "../../../../Assets/Files/Downloads/Alexander-Vasilenko-CV.pdf"
function AboutUs(): JSX.Element {
    return (
        <div className="AboutUs">
            Alex Vas
            <a href="This is my CV" download={cvFile}>CV</a>
        </div>
    );
}

export default AboutUs;
