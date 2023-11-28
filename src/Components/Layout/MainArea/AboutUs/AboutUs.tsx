import "./AboutUs.css";
import cvFile from "../../../../Assets/Files/Downloads/Alexander-Vasilenko-CV.pdf"
import React from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
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
                <div><img className="profile-pic" src={require('../../../../Assets/Images/me_square.jpeg')} alt="" /></div>
                <h2>👋🏻Hi There! I'm</h2>
                <h3>Alexander <span>JR</span> Vasilenko</h3>
                <h4>Full Stack Developer</h4>
                <h5>
                    <NavLink to="#">
                        <img className="icon" src={require('../../../../Assets/Images/giticon.png')} alt="" />
                    </NavLink>
                    <NavLink to="#">
                        <img className="icon" src={require('../../../../Assets/Images/linkedinicon.png')} alt="" />
                    </NavLink>
                    <NavLink to="#">
                        <img className="icon" src={require('../../../../Assets/Images/phoneicon.png')} alt="" />
                    </NavLink>
                    <NavLink to="#">
                        <img className="icon" src={require('../../../../Assets/Images/emailicon.png')} alt="" />
                    </NavLink>
                    <NavLink to="#">
                        <img className="icon" src={require('../../../../Assets/Images/cv.png')} alt="" />
                    </NavLink>
                </h5>
                <div className="chevron-holder">
                    <HashLink smooth to="#about-grid-container" ref={hashlink}>
                        <div className="scroll-down"></div>
                    </HashLink>
                </div>
            </div>

            <div className="about-grid-container" id="about-grid-container">
                <div>
                    <h1>About Me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quis facilis excepturi laboriosam doloremque. Id placeat excepturi praesentium, accusamus aliquid odit maiores culpa libero tempore modi, laboriosam odio delectus consequatur! Molestias maiores voluptatem voluptas autem cumque veritatis dolorum deleniti blanditiis, assumenda aperiam ullam cum error quidem quis exercitationem dolorem nemo est voluptatibus reprehenderit facere deserunt non odit molestiae voluptates? Nihil ea blanditiis odio vitae aut pariatur iste laborum quasi ipsum sint nemo molestiae nisi animi voluptates quam, nam officia est praesentium consequatur repellendus ducimus cum nesciunt culpa eveniet! Veritatis tenetur corporis et iste iure omnis quis. Corporis libero ad, eaque aperiam tempora corrupti qui suscipit officia officiis voluptas tempore, et sapiente laboriosam hic quidem rerum iste cum id! Similique, incidunt? Unde, laborum natus harum, nobis ipsam officiis recusandae modi animi soluta quaerat molestias repudiandae repellat voluptas quos dolor suscipit consequatur iste debitis maiores, perspiciatis magnam quas aspernatur. Reprehenderit, cumque accusamus.</p>
                </div>
                <div>
                    <h1>About This Project</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quis facilis excepturi laboriosam doloremque. Id placeat excepturi praesentium, accusamus aliquid odit maiores culpa libero tempore modi, laboriosam odio delectus consequatur! Molestias maiores voluptatem voluptas autem cumque veritatis dolorum deleniti blanditiis, assumenda aperiam ullam cum error quidem quis exercitationem dolorem nemo est voluptatibus reprehenderit facere deserunt non odit molestiae voluptates? Nihil ea blanditiis odio vitae aut pariatur iste laborum quasi ipsum sint nemo molestiae nisi animi voluptates quam, nam officia est praesentium consequatur repellendus ducimus cum nesciunt culpa eveniet! Veritatis tenetur corporis et iste iure omnis quis. Corporis libero ad, eaque aperiam tempora corrupti qui suscipit officia officiis voluptas tempore, et sapiente laboriosam hic quidem rerum iste cum id! Similique, incidunt? Unde, laborum natus harum, nobis ipsam officiis recusandae modi animi soluta quaerat molestias repudiandae repellat voluptas quos dolor suscipit consequatur iste debitis maiores, perspiciatis magnam quas aspernatur. Reprehenderit, cumque accusamus.</p>
                </div>
            </div>
            <a href="This is my CV" download={cvFile}>CV</a>
        </div>
    );
}

export default AboutUs;
