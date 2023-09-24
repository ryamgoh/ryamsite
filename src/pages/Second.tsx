import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "/dev-ed-wave.png";
import code from "/code.png";
import design from "/design.png";
import consulting from "/consulting.png";
import web1 from "/web1.png";
import web2 from "/web2.png";
import web3 from "/web3.png";
import web4 from "/web4.png";
import web5 from "/web5.png";
import web6 from "/web6.png";
import Navbar from "@/components/Navbar";
import GlobeComponent from "@/components/GlobeComponent";

function Second() {
  return (
    <div>
      <GlobeComponent />
      <Navbar />
      <section className="min-h-screen">
        <div className="text-center p-10 py-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Ryann Goh
          </h2>
          <h3 className="text-2xl py-2 text-foreground md:text-3xl">
            Young Entrepreneur, Developer and Designer.
          </h3>
          <p className="text-md py-5 leading-8 text-foreground max-w-xl mx-auto md:text-xl">
            Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!
          </p>
          <div className="text-5xl flex justify-center gap-16 py-3 text-foreground">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 flex items-center justify-center">
            <img src={deved} className="object-cover" />
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3 className="text-3xl py-1 text-foreground">Services I offer</h3>
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
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-background flex-1">
            <img src={design} className="w-full" />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-foreground py-1">Photoshop</p>
            <p className="text-foreground py-1">Illustrator</p>
            <p className="text-foreground py-1">Figma</p>
            <p className="text-foreground py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-background flex-1">
            <img src={code} className="w-full" />
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Code your dream project
            </h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let's make it a
              reality.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-foreground py-1">Photoshop</p>
            <p className="text-foreground py-1">Illustrator</p>
            <p className="text-foreground py-1">Figma</p>
            <p className="text-foreground py-1">Indesign</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-background flex-1">
            <img src={consulting} className="w-full" />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
            <p className="py-2">
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="text-foreground py-1">Photoshop</p>
            <p className="text-foreground py-1">Illustrator</p>
            <p className="text-foreground py-1">Figma</p>
            <p className="text-foreground py-1">Indesign</p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div>
          <h3 className="text-3xl py-1 text-foreground ">Portfolio</h3>
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
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={web1}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={web2}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={web3}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={web4}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={web5}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <img
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              src={web6}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Second;
