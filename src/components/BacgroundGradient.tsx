import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import GithubIcon from '@/assets/icons/github.svg'

 
export function BackgroundGradient() {
  return (
    <BackgroundGradientAnimation className="mt-20">
      <div className="absolute z-10 inset-0 flex flex-col items-center justify-center px-6 md:px-20 pointer-events-none">
        <p className="text-white  text-2xl text-center md:text-3xl lg:text-4xl max-w-md">
        Prepared to elevate your online presence?
        </p>
        <span className="text-white/60 mt-5">Get in touch, and let's talk about how I can support you in reaching your goals.</span>
      </div>
    </BackgroundGradientAnimation>
  );
}