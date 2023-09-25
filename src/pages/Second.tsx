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
import { Modal } from "@/components/Modal";
import { Separator } from "@/components/ui/separator";

const data = [
  {
    id: 1,
    title: "IMDA",
    date: "Aug - Dec 2023",
    img: web1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto dolorum minima eum velit ex magni quis quod nobis qui, fuga molestiae accusamus nam! Repellat laboriosam veniam officia libero blanditiis maxime sed animi expedita repudiandae. Sequi voluptatibus eius minus amet blanditiis, animi doloribus deserunt, quaerat incidunt porro itaque, ex eum?",
  },
  {
    id: 2,
    title: "IMDA",
    date: "Aug - Dec 2023",
    img: web2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto dolorum minima eum velit ex magni quis quod nobis qui, fuga molestiae accusamus nam! Repellat laboriosam veniam officia libero blanditiis maxime sed animi expedita repudiandae. Sequi voluptatibus eius minus amet blanditiis, animi doloribus deserunt, quaerat incidunt porro itaque, ex eum?",
  },
  {
    id: 3,
    title: "IMDA",
    date: "Aug - Dec 2023",
    img: web3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto dolorum minima eum velit ex magni quis quod nobis qui, fuga molestiae accusamus nam! Repellat laboriosam veniam officia libero blanditiis maxime sed animi expedita repudiandae. Sequi voluptatibus eius minus amet blanditiis, animi doloribus deserunt, quaerat incidunt porro itaque, ex eum?",
  },
  {
    id: 4,
    title: "IMDA",
    date: "Aug - Dec 2023",
    img: web4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto dolorum minima eum velit ex magni quis quod nobis qui, fuga molestiae accusamus nam! Repellat laboriosam veniam officia libero blanditiis maxime sed animi expedita repudiandae. Sequi voluptatibus eius minus amet blanditiis, animi doloribus deserunt, quaerat incidunt porro itaque, ex eum?",
  },
  {
    id: 5,
    title: "IMDA",
    date: "Aug - Dec 2023",
    img: web5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto dolorum minima eum velit ex magni quis quod nobis qui, fuga molestiae accusamus nam! Repellat laboriosam veniam officia libero blanditiis maxime sed animi expedita repudiandae. Sequi voluptatibus eius minus amet blanditiis, animi doloribus deserunt, quaerat incidunt porro itaque, ex eum?",
  },
  {
    id: 6,
    title: "IMDA",
    date: "Aug - Dec 2023",
    img: web6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto dolorum minima eum velit ex magni quis quod nobis qui, fuga molestiae accusamus nam! Repellat laboriosam veniam officia libero blanditiis maxime sed animi expedita repudiandae. Sequi voluptatibus eius minus amet blanditiis, animi doloribus deserunt, quaerat incidunt porro itaque, ex eum?",
  },
];

function Second() {
  return (
    <div>
      <GlobeComponent />
      <Navbar />
      <section className="min-h-screen">
        <div className="p-10 py-10 text-center">
          <h2 className="inline-flex py-2 text-5xl font-medium text-teal-600 dark:text-teal-400 md:text-6xl">
            Ryann Goh{" "}
            <span className="hidden animate-waving-hand dark:inline-block">
              👋🏻
            </span>
            <span className="inline-block animate-waving-hand dark:hidden">
              🥑
            </span>
          </h2>
          <h3 className="py-2 text-2xl text-foreground md:text-3xl">
            Young Entrepreneur, Developer and Designer.
          </h3>
          <p className="text-md mx-auto max-w-xl py-5 leading-8 text-foreground md:text-xl">
            Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!
          </p>
          <div className="flex justify-center gap-16 py-3 text-5xl text-foreground">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto mt-20 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-96 md:w-96">
            <img src={deved} className="object-cover" />
          </div>
        </div>
      </section>
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
            <h3 className="pb-2 pt-8 text-lg font-medium  ">
              Beautiful Designs
            </h3>
            <p className="py-2">
              Creating elegant designs suited for your needs following core
              design theory.
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
              Are you interested in feedback for your current project? I can
              give you tips and tricks to level it up.
            </p>
            <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
            <p className="py-1 text-foreground">Photoshop</p>
            <p className="py-1 text-foreground">Illustrator</p>
            <p className="py-1 text-foreground">Figma</p>
            <p className="py-1 text-foreground">Indesign</p>
          </div>
        </div>
      </section>
      <section className="py-10">
        <div>
          <h3 className="animate-pulse py-1 text-3xl font-semibold text-foreground">
            Portfolio
          </h3>
          <Separator />
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {data.map(({ id, title, date, img, description }) => (
            <div className="relative" key={id}>
              <img
                className="h-full rounded-lg object-cover shadow-lg transition-all duration-500 ease-in-out hover:scale-95 hover:object-contain"
                src={img}
              />
              <div className="absolute bottom-4 left-4 rounded-lg border border-foreground bg-accent px-4 py-1 text-sm font-semibold text-foreground sm:text-lg md:text-xl">
                <h1>{title}</h1>
                <Separator />
                <h2>{date}</h2>
              </div>
              <Modal
                btn="Click Me!"
                className="absolute bottom-4 right-4"
                dialogTitle="Product Management Intern"
                dialogDescription="IMDA"
              >
                <div className="h-[70vh] overflow-scroll">
                  <img src={img} className="w-full" />
                  <p>{description}</p>
                </div>
              </Modal>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Second;
