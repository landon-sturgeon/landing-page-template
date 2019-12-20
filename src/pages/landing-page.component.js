import React from "react";

import Button from "../components/button.component";

import logoWhite from "../assets/img/logo-white.png";

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

            <Button buttonLabel={"Discover what's outside"} hreference={"/"} />
        </div>
    </header>
)

export default LandingPage;