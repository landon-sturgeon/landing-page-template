import React from "react";

import Button from "../components/button.component";

import logoWhite from "../assets/img/logo-white.png";

const LandingPage = () => (
    <div>
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

        {/* <section class="grid-test">
            <div class="row">
                <div class="col-1-of-2">Col 1 of 2</div>
                <div class="col-1-of-2">Col 2 of 2</div>
            </div>
            <div class="row">
                <div class="col-1-of-3">Col 1 of 3</div>
                <div class="col-1-of-3">Col 2 of 3</div>
                <div class="col-1-of-3">Col 3 of 3</div>
            </div>
            <div class="row">
                <div class="col-1-of-3">Col 1 of 3</div>
                <div class="col-2-of-3">Col 2 of 3</div>
            </div>
            <div class="row">
                <div class="col-1-of-4">Col 1 of 4</div>
                <div class="col-1-of-4">Col 2 of 4</div>
                <div class="col-1-of-4">Col 3 of 4</div>
                <div class="col-1-of-4">Col 4 of 4</div>
            </div>
            <div class="row">
                <div class="col-1-of-4">Col 1 of 4</div>
                <div class="col-1-of-4">Col 2 of 4</div>
                <div class="col-2-of-4">Col 2 of 4</div>
            </div>
            <div class="row">
                <div class="col-1-of-4">Col 1 of 4</div>
                <div class="col-3-of-4">Col 3 of 4</div>
            </div>
        </section> */}
    </div>
)

export default LandingPage;