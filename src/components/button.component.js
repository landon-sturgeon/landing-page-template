import React from "react";

const LandingPage = ({buttonLabel, hreference}) => (
    <a href={hreference} className="btn btn--white btn--animated">{buttonLabel}</a>
)

export default LandingPage;