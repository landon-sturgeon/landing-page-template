import React from "react";

import Button from "../components/button.component";

import logoWhite from "../assets/img/logo-white.png";
import nat1 from "../assets/img/nat-1-large.jpg";
import nat2 from "../assets/img/nat-2-large.jpg";
import nat3 from "../assets/img/nat-3-large.jpg";
import nat8 from "../assets/img/nat-8.jpg";
import nat9 from "../assets/img/nat-9.jpg";
import logoGreen from "../assets/img/logo-green-2x.png";

const LandingPage = () => (
    <div>
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="navigation__button">MENU</label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="/" className="navigation__link"><span>01</span>About Website</a></li>
                    <li className="navigation__item"><a href="/" className="navigation__link"><span>02</span>Your Benefits</a></li>
                    <li className="navigation__item"><a href="/" className="navigation__link"><span>03</span>Popular Tours</a></li>
                    <li className="navigation__item"><a href="/" className="navigation__link"><span>04</span>Stories</a></li>
                    <li className="navigation__item"><a href="/" className="navigation__link"><span>05</span>Book Now</a></li>
                </ul>
            </nav>
        </div>

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
                            <img src={nat1} alt="Photo1" className="composition__photo composition__photo--p1"/>
                            <img src={nat2} alt="Photo2" className="composition__photo composition__photo--p2"/>
                            <img src={nat3} alt="Photo3" className="composition__photo composition__photo--p3"/>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-features">
                <i class="icon-basic-world"></i>
                <div className="row">
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i class="feature-box__icon icon-basic-world"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi beatae sed autem, dolorem neque est
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i class="feature-box__icon icon-basic-compass"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">meet nature</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi beatae sed autem, dolorem neque est
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i class="feature-box__icon icon-basic-map"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">find your way</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi beatae sed autem, dolorem neque est
                            </p>
                        </div>
                    </div>
                    <div className="col-1-of-4">
                        <div className="feature-box">
                            <i class="feature-box__icon icon-basic-heart"></i>
                            <h3 className="heading-tertiary u-margin-bottom-small">live a healthier life</h3>
                            <p className="feature-box__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi beatae sed autem, dolorem neque est
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section className="section-tours">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        Most popular tours
                    </h2>
                </div>

                <div className="row">
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front card__side--front--1">
                                <div className="card__picture card__picture--1">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--1">the sea explorer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>3 day tours</li>
                                        <li>up to 30 people</li>
                                        <li>2 tour guides</li>
                                        <li>sleep in cozy hotels</li>
                                        <li>difficulty: easy</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back--1">
                                <div className="card__cta">
                                    <div className="card__price--box">
                                        <p className="card__price--only">Only</p>
                                        <p className="card__price--value">$297</p>
                                    </div>
                                    <a href="/" className="btn btn--white">book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front card__side--front--2">
                                <div className="card__picture card__picture--2">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--2">the land explorer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>7 day tours</li>
                                        <li>up to 40 people</li>
                                        <li>6 tour guides</li>
                                        <li>sleep in provided tents</li>
                                        <li>difficulty: medium</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back--2">
                                <div className="card__cta">
                                    <div className="card__price--box">
                                        <p className="card__price--only">Only</p>
                                        <p className="card__price--value">$497</p>
                                    </div>
                                    <a href="/" className="btn btn--white">book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-1-of-3">
                        <div className="card">
                            <div className="card__side card__side--front card__side--front--3">
                                <div className="card__picture card__picture--3">
                                    &nbsp;
                                </div>
                                <h4 className="card__heading">
                                    <span className="card__heading-span card__heading-span--3">the snow explorer</span>
                                </h4>
                                <div className="card__details">
                                    <ul>
                                        <li>5 day tours</li>
                                        <li>up to 15 people</li>
                                        <li>3 tour guides</li>
                                        <li>sleep in provided tents</li>
                                        <li>difficulty: hard</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card__side card__side--back card__side--back--3">
                                <div className="card__cta">
                                    <div className="card__price--box">
                                        <p className="card__price--only">Only</p>
                                        <p className="card__price--value">$897</p>
                                    </div>
                                    <a href="/" className="btn btn--white">book now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="u-center-text u-margin-top-huge">
                    <a href="/" className="btn btn--green">discover all tours</a>
                </div>
            </section>

            <section className="section-stories">
                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">
                        space for user testimonials
                    </h2>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img class="story__img" src={nat8} alt="person on a tour"/>
                            <figcaption className="story__caption">mary smith</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">this would be some user's testimonial</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi beatae sed autem, dolorem neque est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi beatae sed autem, dolorem neque est
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img class="story__img" src={nat9} alt="person on a tour"/>
                            <figcaption className="story__caption">jack wilson</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">this would be some other user's testimonial</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi beatae sed autem, dolorem neque est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, modi beatae sed autem, dolorem neque est
                            </p>
                        </div>
                    </div>
                </div>
                <div className="u-center-text u-margin-top-huge">
                    <a href="/" className="btn btn--green">See all stories</a>
                </div>
            </section>
            <section className="section-book">
                <div className="row">
                    <div className="book">
                        <div className="book__form">
                            <form action="/" className="form">
                                <div className="u-margin-bottom-medium">
                                    <h2 className="heading-secondary">
                                        Start booking now
                                    </h2>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" id="name" placeholder="Full Name" required/>
                                    <label htmlFor="name" className="form__label">Full Name</label>
                                </div>

                                <div className="form__group">
                                    <input type="email" className="form__input" id="email" placeholder="Email Address" required/>
                                    <label htmlFor="email" className="form__label">Email Address</label>
                                </div>

                                <div className="form__group u-margin-bottom-medium">
                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="small" name="size"/>
                                        <label htmlFor="small" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Small tour group</label>
                                    </div>

                                    <div className="form__radio-group">
                                        <input type="radio" className="form__radio-input" id="large" name="size"/>
                                        <label htmlFor="large" className="form__radio-label">
                                            <span className="form__radio-button"></span>
                                            Large tour group
                                        </label>
                                    </div>
                                </div>

                                <div className="form__group">
                                    <button className="btn btn--green">Next Step &rarr;</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="footer__logo-box">
                    <img src={logoGreen} alt="Full logo" className="footer__logo"/>
                </div>
                <div className="row">
                    <div className="col-1-of-2">
                        <div className="footer__navigation">
                            <ul className="footer__list">
                                <li className="footer__item"><a href="/" className="footer__link">Company</a></li>
                                <li className="footer__item"><a href="/" className="footer__link">Contact us</a></li>
                                <li className="footer__item"><a href="/" className="footer__link">Careers</a></li>
                                <li className="footer__item"><a href="/" className="footer__link">Privacy Policy</a></li>
                                <li className="footer__item"><a href="/" className="footer__link">Terms</a></li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-1-of-2">
                        <p className="footer__copyright">
                            Built by <a href="/" className="footer__link">Landon Sturgeon</a> whose github can be <a href="/" className="footer__link">found here</a>.
                        </p>
                    </div>
                </div>
            </footer>
        </main>
    </div>
)

export default LandingPage;