import { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Raanana.css";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocationItemAccordionModel from "../../../../../Models/LocationItemAccordionModel";

function Raanana(params: LocationItemAccordionModel): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>();
    useEffect(() => {
        const time = new Date();
        const hours = time.getHours();
        hours >= 8 && hours < 22 ? setIsOpen(true) : setIsOpen(false)
    }, [])
    return (
        <div className="Raanana">
            <Header />
            <div className="grid-container">
                <div className="link-tree-container">
                    <div className="link-tree">
                        <h3>Summary</h3>
                        <ul>
                            <li>AAA</li>
                            <li>BBB</li>
                            <li>CCC</li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <div className="hours-and-contact">
                        <h3>Hours And Contact</h3>
                        <div className="subj-content">
                            <p className="days">Right Now:</p>
                            <p className={isOpen ? "open" : "closed"}>{isOpen ? "OPEN" : "CLOSED"}</p>
                            <p className="days">Sunday - Friday:</p>
                            <p>8AM - 10PM</p>
                            <p className="days">Saturday:</p>
                            <p>10AM - 10PM</p>
                        </div>
                        <div className="contact">
                            <div><LocalPhoneOutlinedIcon />050-814-5431<br/>+972508145431</div>
                            <div><MailOutlineOutlinedIcon />alexandervjr1@gmail.com<br/>{params.email}</div>
                            <div><PlaceOutlinedIcon />{params.address}</div>
                        </div>
                    </div>
                    <h3>About The Ra'anana location</h3>
                    <p>The Ra'anana branch is located in Ra'ananas city center. Placed in a strategic location between Herzelias and Ra'ananas infamous High-Tec industrial zones. The location is merely a 10 minute drive from both Ra'ananas train stations, 10 minutes from Ra'ananas industrial zone, 10 kilometers from Herzelia And 30 kilometers from Tel Aviv city center.</p>
                    <h3>How To Reach Our Office in Ra'anana</h3>
                    <p>Our office is located at {params.address} You can find us on floor 1. There is plenty of parking on the street and in the area.</p>
                    <h3>Map</h3>
                    
                    <h3>Available vehicles</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsum praesentium est ad perferendis illum assumenda voluptas ducimus adipisci numquam eos suscipit libero dignissimos id quo sint cupiditate, aperiam tempora nisi odio. Quam, eligendi rem!</p>
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aliquam tempore molestias ex praesentium expedita? Culpa obcaecati nostrum amet ratione?</p>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil accusantium nobis?</p>
                    <h3>Lorem ipsum dolor sit amet.</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus molestiae consectetur ullam quas sit perferendis, in a amet consequatur placeat minima velit voluptatibus quae tenetur saepe, beatae corrupti exercitationem nostrum dolore nemo? Iusto, eum?</p>
                    <h3>Lorem ipsum dolor sit.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure vero esse facere distinctio placeat culpa. Voluptatibus, ab! Ullam perferendis quis reprehenderit, mollitia, possimus odio distinctio dolorem qui natus cum voluptates.</p>
                    <h3>Lorem, ipsum.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At ipsum praesentium est ad perferendis illum assumenda voluptas ducimus adipisci numquam eos suscipit libero dignissimos id quo sint cupiditate, aperiam tempora nisi odio. Quam, eligendi rem!</p>

                </div>
            </div>
        </div>
    );
}

export default Raanana;
