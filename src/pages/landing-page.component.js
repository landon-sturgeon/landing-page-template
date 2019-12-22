import React from "react";

import Button from "../components/button.component";

import logoWhite from "../assets/img/logo-white.png";
import nat1 from "../assets/img/nat-1-large.jpg";
import nat2 from "../assets/img/nat-2-large.jpg";
import nat3 from "../assets/img/nat-3-large.jpg";

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

        <main>
            <section className="section-about">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        This is space for an about section
                    </h2>
                </div>

                <div class="row">
                    <div class="col-1-of-2">
                        <h3 className="heading-tertiary u-margin-bottom-small">
                            You're going to love this about page
                        </h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi beatae sed autem, dolorem neque est repudiandae qui rerum omnis illo suscipit quis mollitia, quisquam quidem doloribus illum dolore in.
                        </p>

                        <h3 className="heading-tertiary u-margin-bottom-small">
                            Take it and reuse it. That's why it's here
                        </h3>
                        <p class="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi beatae sed autem, dolorem neque est repudiandae qui rerum.
                        </p>

                        <a href="/" className="btn-text">
                            Learn more &rarr;
                        </a>
                    </div>
                    <div class="col-1-of-2">
                        <div className="composition">
                            <img src={nat1} alt="Photo 1" className="composition__photo composition__photo--p1"/>
                            <img src={nat2} alt="Photo 2" className="composition__photo composition__photo--p2"/>
                            <img src={nat3} alt="Photo 3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>

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