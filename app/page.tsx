import Container from "@/components/Container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/Hero";
import { ChevronIcon } from "@/components/icons/chevron";
import { Button, Highlight } from "@/components/ui/button";

export default function Home() {
  return (
    <Container className="pt-[6.4rem]">
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
        <HeroTitle>
          Linear is a better way <br className="hidden md:block" /> to build
          products
        </HeroTitle>
        <HeroSubtitle>
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
        <img src="/hero.webp" alt="Hero image" />
      </Hero>
    </Container>
  );
}
