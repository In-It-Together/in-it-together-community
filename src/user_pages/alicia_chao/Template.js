import React from 'react';

const Template = () => {

    // Name
    const name = "Alicia";

    // Social Accounts
    const github = "https://github.com/chaochaocodes";
    const linkedin = "https://www.linkedin.com/in/alicia-chao/";

    // Interests
    const interests = ["React", "Open Source", "JavaScript"]

    // Projects -> links || actual components || up to the user
    const projects = ["https://github.com/In-It-Together/c3_useState_Timer", "https://github.com/In-It-Together/c5_dynamic_forms"]

    const renderArray = array => {
        return array.map((element, index) => {
            return <li>{element}</li>
        })
    }

    return (
        <div>
            <h1>Hello, my name is {name}.</h1>
            <p>Contact me on <a href={linkedin}>LinkedIn</a>.</p>
            <p>Checkout my <a href={github}>github</a> here.</p>

            <p>My interests include:</p>
            <ul>
                {renderArray(interests)}
            </ul>

            <p>You can see my projects here:</p>
            <ul>
                {renderArray(projects)}
            </ul>
        </div>
    );
};

export default Template;