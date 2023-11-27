import "./AboutUs.css";
import cvFile from "../../../../Assets/Files/Downloads/Alexander-Vasilenko-CV.pdf"
function AboutUs(): JSX.Element {
    return (
        <div className="AboutUs">
            <h1>About Me & This Project</h1>
            <div>picture</div>
            <h2>👋🏻Hi There! I'm</h2>
            <h3>Alexander JR Vasilenko</h3>
            <h4>Full Stack Developer</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, error harum. Provident sit praesentium, vero quidem
                eum autem explicabo, quos ipsam aut expedita iure harum aliquid illum adipisci itaque? Neque tempora mollitia animi
                quaerat similique debitis cumque nihil ipsum asperiores!</p>
            <a href="This is my CV" download={cvFile}>CV</a>
        </div>
    );
}

export default AboutUs;
