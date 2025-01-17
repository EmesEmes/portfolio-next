import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolBoxItems from "@/components/ToolBoxItems";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Traveling",
    emoji: "🌍",
    left: "5%",
    top: "5%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "50%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "10%",
    top: "35%",
  },
  {
    title: "Cooking",
    emoji: "👨‍🍳",
    left: "35%",
    top: "40%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "5%",
    top: "65%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Lear more about who I am, wht I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
                
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools Y use to craft exceptional
                digital experiences."
              />
              <ToolBoxItems items={toolBoxItems} className="mt-6" />
              <ToolBoxItems
                items={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobbie) => (
                <div
                  key={hobbie.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{ left: hobbie.left, top: hobbie.top }}
                >
                  <span className="font-medium text-gray-950">
                    {hobbie.title}
                  </span>
                  <span>{hobbie.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="Never Stop Learning"
              description="Currently mastering Next.js"
              className="px-6 pt-6"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={mapImage} alt="Map" />
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
