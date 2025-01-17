import { BackgroundGradient } from "@/components/BacgroundGradient";
import GithubIcon from "@/assets/icons/github.svg";

export const ContactSection = () => {
  return <div className="container mb-20">
    <BackgroundGradient />
    <div className="flex justify-center space-x-4 mt-10">
      <a href="https://www.google.com" target="_blank">
        <GithubIcon className="w-12 h-12" />
      </a>
      <a href="https://www.google.com" target="_blank">
        <GithubIcon className="w-12 h-12" />
      </a>
    </div>
  </div>;
};
