import React from "react";
import { AlanLogo } from "../icons/logos/alan";
import { ArcLogo } from "../icons/logos/arc";
import { CashAppLogo } from "../icons/logos/cashapp";
import { RaycastLogo } from "../icons/logos/raycast";
import { RetoolLogo } from "../icons/logos/retool";
import { RampLogo } from "../icons/logos/ramp";
import { VercelLogo } from "../icons/logos/vercel";
import { PitchLogo } from "../icons/logos/pitch";
import { LoomLogo } from "../icons/logos/loom";
import { MercuryLogo } from "../icons/logos/mecury";
import { OpenSeaLogo } from "../icons/logos/opensea";
import { DescriptLogo } from "../icons/logos/descript";

const Clients = () => {
  return (
    <>
      <p className="text-lg md:text-xl text-white mb-12 text-center">
        <span className="text-primary-text">
          Powering the world's best product teams.
        </span>
        <br className="hidden md:block" /> From next-gen startups to established
        enterprises.
      </p>
      <div className="flex flex-wrap [&_svg]:max-w-[16rem] gap-x-6 gap-y-8 md:[&_svg]:basis-[calc(16.66%-20px)] [&_svg]:basis-[calc(50%-12px)] justify-around">
        <AlanLogo />
        <ArcLogo />
        <CashAppLogo className="hidden md:block" />
        <RaycastLogo className="hidden md:block" />
        <RetoolLogo />
        <RampLogo />
        <VercelLogo />
        <PitchLogo />
        <LoomLogo className="hidden md:block" />
        <MercuryLogo className="hidden md:block" />
        <OpenSeaLogo className="hidden md:block" />
        <DescriptLogo className="hidden md:block" />
      </div>
    </>
  );
};

export default Clients;
