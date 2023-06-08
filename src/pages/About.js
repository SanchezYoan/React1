import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>A propos</h1>
      <br />
      <p>
        <LoremIpsum p={2} />
      </p>
    </div>
  );
};

export default About;
