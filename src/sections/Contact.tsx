import { BackgroundGradient } from "@/components/BacgroundGradient";
import GithubIcon from "@/assets/icons/github.svg";
import LinkedinIcon from "@/assets/icons/linkedin.svg";
import SectionHeader from "@/components/SectionHeader";

export const ContactSection = () => {
  return (
    <div className="container mb-20" id="contact">
      <SectionHeader
        title="Reach Out and Let's Collaborate"
        eyebrow="Contact"
      />
      <BackgroundGradient />
      <p className="text-center text-white/60 mt-20 md:text-lg lg:text-xl max-sm:max-w-md mx-auto">
        Feel free to reach out through the social media links provided. Let's
        connect and continue the conversation!
      </p>
      <div className="flex justify-center space-x-4 mt-20">
        <a href="https://github.com/EmesEmes" target="_blank">
          <GithubIcon className="w-12 h-12" />
        </a>
        <a
          href="https://www.linkedin.com/in/emilio-del-hierro-368b66243/"
          target="_blank"
        >
          <LinkedinIcon className="w-12 h-12" />
        </a>
      </div>
    </div>
  );
};
