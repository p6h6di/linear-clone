import Container from "@/components/Container";
import { StarsIllustration } from "@/components/icons/stars";
import Clients from "@/components/sections/clients";
import HomePageHero from "@/components/sections/homepage-hero";
import UnlikeAnyTool from "@/components/sections/unlike-any-tool";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[24.6rem]">
        <Container className="pt-[6.4rem]">
          <HomePageHero />
        </Container>
      </div>

      <Container>
        <Clients />
      </Container>

      <div
        className={cn(
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>

      <Container>
        <UnlikeAnyTool />
      </Container>
    </>
  );
}
