import "./AboutUs.css";
import cvFile from "../../../../Assets/Files/Downloads/Alexander-Vasilenko-CV.pdf"
import React from "react";
import { HashLink } from "react-router-hash-link";
// import myPic from "../../../../Assets/Images/me_square.jpeg"
function AboutUs(): JSX.Element {

    let hashlink = React.useRef();
    function scrollDown(): void {
        const btn = hashlink.current as unknown as HTMLElement;
        btn.click();
    }

    return (
        <div className="AboutUs">
            <div className="first-section">
                <h1 className="h1">About Me & This Project</h1>
                <div><img src={require('../../../../Assets/Images/me_square.jpeg')} alt="" /></div>
                <h2>👋🏻Hi There! I'm</h2>
                <h3>Alexander <span>JR</span> Vasilenko</h3>
                <h4>Full Stack Developer</h4>
                <div className="chevron-holder">
                    <HashLink smooth to="#about-grid-container" ref={hashlink}>
                        <div className="scroll-down"></div>
                    </HashLink>
                </div>
            </div>

            <div className="about-grid-container" id="about-grid-container">
                <div><h1>About Me</h1></div>
                <div><h1>About This Project</h1></div>
            </div>
            <a href="This is my CV" download={cvFile}>CV</a>
        </div>
    );
}

export default AboutUs;
