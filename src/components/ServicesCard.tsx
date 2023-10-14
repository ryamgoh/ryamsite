import React from "react";
import code from "/code.png";
import design from "/design.png";
import consulting from "/consulting.png";

function ServicesCard() {
  return (
    <section>
      <div>
        <h3 className="animate-pulse py-1 text-3xl font-semibold text-foreground">
          Services I offer
        </h3>
        <p className="text-md py-2 leading-8 text-foreground">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-foreground">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="gap-10 lg:flex">
        <div className="my-10 flex-1 rounded-xl bg-background p-10 text-center shadow-lg">
          <img src={design} className="w-full" />
          <h3 className="pb-2 pt-8 text-lg font-medium  ">Beautiful Designs</h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design
            theory.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="py-1 text-foreground">Photoshop</p>
          <p className="py-1 text-foreground">Illustrator</p>
          <p className="py-1 text-foreground">Figma</p>
        </div>
        <div className="my-10 flex-1 rounded-xl bg-background p-10 text-center shadow-lg">
          <img src={code} className="w-full" />
          <h3 className="pb-2 pt-8 text-lg font-medium ">
            Code your dream project
          </h3>
          <p className="py-2">
            Do you have an idea for your next great website? Let's make it a
            reality.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="py-1 text-foreground">Photoshop</p>
          <p className="py-1 text-foreground">Illustrator</p>
          <p className="py-1 text-foreground">Figma</p>
          <p className="py-1 text-foreground">Indesign</p>
        </div>
        <div className="my-10 flex-1 rounded-xl bg-background p-10 text-center shadow-lg">
          <img src={consulting} className="w-full" />
          <h3 className="pb-2 pt-8 text-lg font-medium ">Consulting</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can give
            you tips and tricks to level it up.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="py-1 text-foreground">Photoshop</p>
          <p className="py-1 text-foreground">Illustrator</p>
          <p className="py-1 text-foreground">Figma</p>
          <p className="py-1 text-foreground">Indesign</p>
        </div>
      </div>
    </section>
  );
}

export default ServicesCard;
