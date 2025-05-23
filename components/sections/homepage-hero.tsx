import React from "react";
import { Hero, HeroSubtitle, HeroTitle } from "../Hero";
import { Button, Highlight } from "../ui/button";
import { ChevronIcon } from "../icons/chevron";
import { HeroImage } from "../HeroImage";

const HomePageHero = () => {
  return (
    <Hero>
      <Button
        className="translate-y-[-1rem] animate-fade-in opacity-0"
        href="/"
        variant="secondary"
        size="small"
      >
        <span>Linear 2022 Release – Built for scale</span>{" "}
        <Highlight>→</Highlight>
      </Button>
      <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        Linear is a better way <br className="hidden md:block" /> to build
        products
      </HeroTitle>
      <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Meet the new standard for modern software development.
        <br className="hidden md:block" />
        Streamline issues, sprints and product roadmaps.
      </HeroSubtitle>

      <Button
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
        href="/"
        variant="primary"
        size="large"
      >
        <span>Get Started </span>
        <Highlight>
          <ChevronIcon />
        </Highlight>
      </Button>
      <HeroImage />
    </Hero>
  );
};

export default HomePageHero;
