"use client";

import notaryImage from "@/assets/images/notaria.png";
import dataMindImage from "@/assets/images/datamind.png";
import aiStartupLandingPage from "@/assets/images/awwwards.png";
import iphoneImage from "@/assets/images/iphone.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Notary 22 Quito",
    year: "2023",
    title: "Landing Page",
    results: [
      { title: "Astro" },
      { title: "Tailwind CSS" },
      { title: "SEO" },
    ],
    link: "https://www.notaria22quito.com/",
    image: notaryImage,
  },
  {
    company: "Class Project",
    year: "2024",
    title: "Winning Project",
    results: [
      { title: "Pure HTML" },
      { title: "Pure CSS" },
      { title: "Scroll Driven Animations" },
    ],
    link: "https://datamind-sigma.vercel.app/",
    image: dataMindImage,
  },
  {
    company: "Online Course Project",
    year: "2024",
    title: "Modern Design",
    results: [
      { title: "React" },
      { title: "GSAP" },
      { title: "Tailwind" },
    ],
    link: "https://awards-ten.vercel.app/",
    image: aiStartupLandingPage,
  },
  {
    company: "Iphone 15 Clone",
    year: "2024",
    title: "3D Models",
    results: [
      { title: "React" },
      { title: "Three.js" },
      { title: "GSAP" },
    ],
    link: "https://iphone-clone-delta.vercel.app/",
    image: iphoneImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Achieving Results That Matter"
          title="Some Of My Projects"
          description="Discover how I turn ideas into captivating digital solutions."
        />

        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project, i) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${i * 40}px)`
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-indigo-700 to-sky-600 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col mt-4 md:mt-5 gap-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="group relative z-10 bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12 flex">
                          <span>View Live Site</span>
                          <ArrowUpRight className="size-4 ml-2" />
                        </div>
                        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0 flex">
                          <span>View Live Site</span>
                          <ArrowUpRight className="size-4 ml-2" />
                        </div>
                      </span>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
