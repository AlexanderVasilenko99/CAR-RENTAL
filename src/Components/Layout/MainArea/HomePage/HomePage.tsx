import { useEffect, useState, useRef } from "react";
import ReactPlayer from 'react-player';

import "./HomePage.css";
import { HashLink } from "react-router-hash-link";
import appConfig from "../../../../Utils/AppConfig";
import React from "react";
import SearchForm from "./SearchForm/SearchForm";








function HomePage(): JSX.Element {

    let hashlink = React.useRef();
    function scrollDown() {
        const btn = hashlink.current as unknown as HTMLElement;
        btn.click();
    }


    return (
        <div className="HomePage">

            <HashLink smooth to={appConfig.samePagePath + "searchform"} ref={hashlink}>
                <ReactPlayer url={require("../../../../Assets/Videos/vid1.mp4")} muted playing onEnded={scrollDown} width="100%" height="100%" />
            </HashLink>
            <div className="navbar-placeholder" id="searchform"></div>
            <SearchForm />

        </div>
    );
}

export default HomePage;
