import React from "react";

import "./landing-page.styles.scss";
import logoWhite from "../../assets/img/logo-white.png";

const LandingPage = () => (
    <div class="header">
        <div class="header__logo-box">
            <img src={logoWhite} alt="logo" class="header__logo"/>
        </div>

        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Outdoors</span>
                <span class="heading-primary--sub">is where life happens</span>
            </h1>

            <a href="/" class="btn btn--white btn--animated">Discover what's outside</a>
        </div>
    </div>
)

export default LandingPage;