import React from 'react';
import { Link } from 'react-router-dom';
// import { Icon } from 'semantic-ui-react';
import ContactIcons from '../Contact/ContactIcons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { falocationarrow } from '@fortawesome/free-solid-svg-icons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>THARUN REDDY</h2>
        <p><a href="mailto:tharunreddydubba@gmail.com">tharunreddydubba@gmail.com</a></p>
      </header>
    </section>

    {/* <section className="blurb">
      <div>
        <FontAwesomeIcon icon={falocationarrow} />
        <p>Tokyo</p>
      </div>
    </section> */}

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
