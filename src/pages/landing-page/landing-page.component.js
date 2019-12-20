import React from "react";

import "./landing-page.styles.css";
import logoWhite from "../../assets/img/logo-white.png";

const LandingPage = () => (
    <header class="header">
        <div class="header__logo-box">
            <img src={logoWhite} alt="logo" class="header__logo"/>
        </div>

        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Outdoors</span>
                <span class="heading-primary--sub">is where life happens</span>
            </h1>

            <a href="/" class="btn btn--white btn--animated">Discover what's inside</a>
        </div>
    </header>
)

export default LandingPage;