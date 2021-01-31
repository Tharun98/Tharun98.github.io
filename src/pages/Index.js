import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Tharun's personal website"}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">Hi</h2>
          <p>I&apos;m Tharun. I am a Software Engineer with inclination towards Data science,
            working at
            <a href="https://www.yokogawa.com/"> Yokogawa, Tokyo</a>.
            <a href="https://iith.ac.in/"> IIT Hyderabad</a> Alumnus.
          </p>
        </div>
      </header>
      <p> Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>

    </article>
  </Main>
);

export default Index;
