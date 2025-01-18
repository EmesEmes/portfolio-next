"use client";

import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import HeroOrbit from "@/components/HeroOrbit";
import Js from "@/assets/icons/square-js.svg";
import NextImage from "@/assets/icons/next.svg";
import ReactImage from "@/assets/icons/react.svg";
import AstroImage from "@/assets/icons/astro.svg";
import TailwindImage from "@/assets/icons/tailwind.svg";
import NodeImage from "@/assets/icons/node.svg";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          className="absolute inset-0  opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-72} shouldOrbit spinDuration={25}>
          <Js className="size-20 text-indigo-700" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20} shouldOrbit spinDuration={20}>
          <NextImage className="size-18 text-indigo-700" />
        </HeroOrbit>
        <HeroOrbit size={460} rotation={120} shouldOrbit isReverse>
          <NodeImage className="size-10 text-indigo-700" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          spinDuration={10}
          isReverse
        >
          <ReactImage className="size-24 text-indigo-700" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-14} shouldOrbit spinDuration={15}>
          <AstroImage className="size-12 text-indigo-700" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={79}>
          <StarIcon className="size-5 text-indigo-700" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178}>
          <StarIcon className="size-10 text-indigo-700" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          spinDuration={15}
          isReverse
        >
          <TailwindImage className="size-24 text-indigo-700" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85}>
          <div className="size-3 rounded-full bg-indigo-700" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41}>
          <div className="size-2 rounded-full bg-indigo-700" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-indigo-700" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <span className="text-9xl">👨🏻‍💻</span>
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full animate-pulse" />
            <div className="text-sm font-semibold">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hi, I'm <span className="text-indigo-700">Emilio Esteban</span>
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
          Software developer located in Quito - Ecuador, passionate about Front-End and future Full Stack.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore My Work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <a href="#contact">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <span>👋</span>
              <span className="font-semibold">Let's Connect</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};
