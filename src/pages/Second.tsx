import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillMessage,
  AiFillMail,
} from "react-icons/ai";
import deved from "/dev-ed-wave.png";
import imda from "/imda.png";
import agcs from "/agcs.png";
import scsmentor from "/scsmentor.png";
import teamE from "/teamE.png";
import nusproduct from "/nusproduct.png";
import web6 from "/web6.png";
import Navbar from "@/components/Navbar";
import GlobeComponent from "@/components/GlobeComponent";
import { Modal } from "@/components/Modal";
import { Separator } from "@/components/ui/separator";
// import ServicesCard from "@/components/ServicesCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ParticleComponent from "@/components/ParticleComponent";

const data = [
  {
    title: "NUS Product Club",
    role: "Product Management Curriculum",
    date: "Aug 2023 - Present",
    img: nusproduct,
    description: [
      "• 1st Runners Up - Internal Product Challenge",
      "• Pioneer batch to go through a 6-week deep dive into the in-house Product Management Essentials course (PM1101E) taught by industry experts.",
      "• Worked with a team of 3 to develop a product from ideation to launch, including conducting user research, prototyping, and product validation.",
      "• Utilised industry-tested product discovery strategies",
      "• Proficiently analyzed product metrics to inform and drive data-driven decision-making processes, ensuring product optimization.",
    ],
  },
  {
    title: "IMDA",
    role: "Product Management Intern",
    date: "Aug - Dec 2023",
    img: imda,
    description: [
      "• Worked with SME Go Digital division and Platforms to push out Industry Digital Plan (IDP) for Legal and Retail sectors assuming the role as a solutions curator.",
      "• Apply design thinking processes to design IDPs for Retail and Legal Sectors, including identifying user personas, ethnographic research, design workshops, ideation sessions, etc.",
      "• Collaborated with team members and external stakeholders, including SMEs and partnering agencies, to build common understanding, project plans, and gain consensus on the team's plans and actions.",
      "• Worked with UI/UX team to streamline the next generation of IDP design i.e. revamping from PDF to HTML format.",
    ],
  },
  {
    title: "Singapore Computer Society",
    role: "Hackathon Mentor",
    date: "Aug - Dec 2023",
    img: scsmentor,
    description: [
      "• Mentored and guided secondary school students participating in the SCS Splash Awards 2023 Hackathon.",
      "• Provided valuable expert insights and precise technical guidance to elevate students' project development.",
      "• Empowered and mentored aspiring talents, imparting specialized technical knowledge in key areas such as Web Development Frameworks (FERN Stack, CRUD routing), Cloud Technologies, Generative AI, AGILE Methodology, and meticulous project planning.",
    ],
  },
  {
    title: "Allen & Gledhill",
    role: "Corporate Secreterial Intern",
    date: "Aug - Dec 2023",
    img: agcs,
    description: [
      "• Provided valuable support to lawyers in managing a diverse portfolio of over 100 locally incorporated and foreign corporate clients.",
      "• Ensured adherence to applicable statutory and regulatory obligations (ACRA, IRAS, etc.).",
      "• Demonstrated proficiency in drafting and issuing company directorial resolutions, overseeing regulatory filings, and maintaining minute books.",
      "• Possessed advanced skills in Microsoft Word and Excel.",
    ],
  },
  {
    title: "Team E",
    role: "Founding Chairperson",
    date: "Jan 2022 - Aug 2023",
    img: teamE,
    description: [
      "• Environmental Organisation focusing on Singapore's E-waste Space.",
      "• Awarded the People's Association Youth Movement (PAYM) Community Grant (worth $3k)",
      "• Established partners with Industry leaders - ALBA and Choa Chu Kang CC.",
      "• 100+ student volunteers engaged and >8 tonnes of E-waste collected.",
      "• Still open to incorporating into an NGO (Currently inactive)",
    ],
  },
];

function Second() {
  return (
    <div>
      <GlobeComponent />
      <Navbar />
      <section className="relative min-h-screen">
        <ParticleComponent />
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
            <div className="transition-all duration-500 ease-in-out hover:scale-125 hover:cursor-pointer">
              <AiFillTwitterCircle />
            </div>
            <div className="transition-all duration-500 ease-in-out hover:scale-125 hover:cursor-pointer">
              <AiFillLinkedin />
            </div>
            <div className="transition-all duration-500 ease-in-out hover:scale-125 hover:cursor-pointer">
              <AiFillYoutube />
            </div>
          </div>
          <AnimateOnScroll>
            <div className="relative mx-auto mt-20 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full bg-gradient-to-b from-teal-500 md:h-96 md:w-96">
              <img src={deved} className="object-cover" />
            </div>
          </AnimateOnScroll>
        </div>
      </section>
      {/* <AnimateOnScroll threshold={0.05} reappear={true}>
        <ServicesCard />
      </AnimateOnScroll> */}
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
          {data.map(({ title, date, img, description, role }) => (
            <div className="relative" key={Math.random()}>
              <div className="group">
                <img
                  className="h-[20rem] w-full rounded-lg object-cover shadow-lg transition-all duration-500 ease-in-out hover:scale-95"
                  src={img}
                />
                <div className="sm:text-md absolute bottom-4 left-4 rounded-lg border border-foreground bg-accent px-4 py-1 text-sm font-semibold text-foreground transition-all duration-500 group-hover:opacity-0 md:text-lg">
                  <h1>{title}</h1>
                  <h2 className="font-thin italic">{role}</h2>
                </div>
                <Modal
                  btn="More Info"
                  // className="absolute bottom-4 right-4 hidden transition-all duration-500 hover:block group-hover:block"
                  className="absolute bottom-4 right-4 opacity-0 transition-all duration-500 group-hover:opacity-100"
                  dialogTitle={role}
                  dialogDescription={date}
                >
                  <div className="h-[60vh] overflow-scroll">
                    <img src={img} className="m-auto h-[80%]" />
                    {description.map((desc) => (
                      <p className="py-2 text-foreground">{desc}</p>
                    ))}
                  </div>
                </Modal>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Second;
