import React from "react";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import GithubIcon from '@/assets/icons/github.svg'

 
export function BackgroundGradient() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-10 inset-0 flex flex-col items-center justify-center px-20 pointer-events-none">
        <p className="text-white  text-2xl text-center md:text-3xl lg:text-4xl">
          Ready to take your digital presence to the next level?
        </p>
        <span className="text-white/60 mt-5">Reach out to me today and let's discuss how I can help you achieve your goals.</span>
      </div>
    </BackgroundGradientAnimation>
  );
}