import "./AboutUs.css";
import cvFile from "../../../../Assets/Files/Downloads/Alexander-Vasilenko-CV.pdf"
function AboutUs(): JSX.Element {
    return (
        <div className="AboutUs">
            <div>About Me & This Project</div>
            <div>picture</div>
            <div>Hi There! I'm</div>
            <div>Alexander JR Vasilenko</div>
            <div>Full Stack Developer</div>
            <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, error harum. Provident sit praesentium, vero quidem
                eum autem explicabo, quos ipsam aut expedita iure harum aliquid illum adipisci itaque? Neque tempora mollitia animi
                quaerat similique debitis cumque nihil ipsum asperiores!</div>
            <a href="This is my CV" download={cvFile}>CV</a>
        </div>
    );
}

export default AboutUs;
