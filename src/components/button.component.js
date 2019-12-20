import React from "react";

const LandingPage = ({buttonLabel, hreference}) => (
    <a href={hreference} class="btn btn--white btn--animated">{buttonLabel}</a>
)

export default LandingPage;